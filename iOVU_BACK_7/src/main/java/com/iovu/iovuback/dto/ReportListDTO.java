package com.iovu.iovuback.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportListDTO {
    private Integer report_id;
    private String keyword;
    private String status;
    private Integer data_volume;
    private Timestamp created_at;
    private Timestamp updated_at;

    private List<ReportDetailDTO> report_details_dto;
    private DashboardDTOO dashboard_dto;

}
