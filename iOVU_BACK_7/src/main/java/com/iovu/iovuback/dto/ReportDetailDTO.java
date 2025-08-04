package com.iovu.iovuback.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportDetailDTO {
    private Integer report_detail_id;
    private Integer report_id;
    private String ai_type;
    private Timestamp created_at;
    private String json_data;

    private ConsultingDTO consulting_dto;
    private DomainLinkDTO domain_link_dto;
}
