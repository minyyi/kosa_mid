package com.iovu.iovuback.controller;

import com.iovu.iovuback.domain.Consulting;
import com.iovu.iovuback.service.ConsultingService;
// import org.apache.ibatis.javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class ConsultingController {

    public ConsultingService consultingService;

    public ConsultingController(ConsultingService consultingService) {
        this.consultingService = consultingService;
    }

    @GetMapping("/reports/{reportDetailId}/consulting")
    public List<Consulting> getConsultingReport(@PathVariable Long  reportDetailId) {
        List<Consulting> result =  consultingService.getConsulting(reportDetailId);
        if(result == null || result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Report not found");
        }
        return result;
    }
}
