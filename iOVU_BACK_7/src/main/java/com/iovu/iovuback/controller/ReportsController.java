package com.iovu.iovuback.controller;


import com.iovu.iovuback.domain.ReportList;
import com.iovu.iovuback.dto.ReportListDTO;
import com.iovu.iovuback.service.ReportsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class ReportsController {
    private ReportsService reportsService;

    public ReportsController(ReportsService reportsService) {
        this.reportsService = reportsService;
    }

//    @GetMapping("/reports")
//    public List<ReportList> getAllReports() {
//        return reportsService.selectAll();
//    }
    @GetMapping("/reports")
    public ResponseEntity<List<ReportList>> getAllReports() {
        List<ReportList> reports = reportsService.selectAll();
        if (reports == null || reports.isEmpty()) {
            return ResponseEntity.noContent().build(); // 204 No Content
        }
        return ResponseEntity.ok(reports);
    }

    @PostMapping("/reports")
    public ResponseEntity<ReportListDTO> insertFullReport(@RequestBody ReportListDTO dto) {
        reportsService.insertFullReport(dto);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(dto.getReport_id())
                .toUri();

        return ResponseEntity.created(location).build();
    }
}
