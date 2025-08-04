package com.iovu.iovuback.mapper;

import com.iovu.iovuback.domain.ReportList;
import com.iovu.iovuback.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReportListMapper {
    public List<ReportList> selectAll();

    public void insertReportListDTO(ReportListDTO dto);
    public void insertDashboardDTO(DashboardDTOO dto);
    public void insertReportDetailDTO(ReportDetailDTO dto);
    public void insertConsultingDTO(ConsultingDTO dto);
    public void insertDomainLinkDTO(DomainLinkDTO dto);
    public void insertLinkListDTO(LinkListDTO dto);

}
