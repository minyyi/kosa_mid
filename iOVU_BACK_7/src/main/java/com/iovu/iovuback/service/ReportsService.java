package com.iovu.iovuback.service;

import com.iovu.iovuback.domain.ReportList;
import com.iovu.iovuback.dto.*;
import com.iovu.iovuback.mapper.ReportListMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

@Service
public class ReportsService {
    private ReportListMapper reportListMapper;

    public ReportsService(ReportListMapper reportListMapper) {
        this.reportListMapper = reportListMapper;
    }

    public List<ReportList> selectAll() {
        return reportListMapper.selectAll();
    }

    @Transactional
    public void insertFullReport(ReportListDTO dto) {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        dto.setCreated_at(now);
        dto.setUpdated_at(now);

        reportListMapper.insertReportListDTO(dto);

        if (dto.getDashboard_dto() != null) {
            DashboardDTOO dashboard = dto.getDashboard_dto();
            dashboard.setReport_id(dto.getReport_id());
            reportListMapper.insertDashboardDTO(dashboard);
        }

        if (dto.getReport_details_dto() != null) {
            for (ReportDetailDTO detail : dto.getReport_details_dto()) {
                detail.setReport_id(dto.getReport_id());
                detail.setCreated_at(now);
                reportListMapper.insertReportDetailDTO(detail);

                if (detail.getConsulting_dto() != null) {
                    ConsultingDTO consulting = detail.getConsulting_dto();
                    consulting.setReport_detail_id(detail.getReport_detail_id());
                    reportListMapper.insertConsultingDTO(consulting);
                }

                if (detail.getDomain_link_dto() != null) {
                    DomainLinkDTO domainLink = detail.getDomain_link_dto();
                    domainLink.setReport_detail_id(detail.getReport_detail_id());
                    reportListMapper.insertDomainLinkDTO(domainLink);

                    if (domainLink.getLink_list_dto() != null) {
                        for (LinkListDTO link : domainLink.getLink_list_dto()) {
                            link.setDomain_link_id(domainLink.getDomain_link_id());
                            reportListMapper.insertLinkListDTO(link);
                        }
                    }
                }
            }
        }
    }
}
