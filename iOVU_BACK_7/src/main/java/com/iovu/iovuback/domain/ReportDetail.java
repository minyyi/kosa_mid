package com.iovu.iovuback.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportDetail {
    private Integer report_detail_id;
    private Integer report_id;
    private String ai_type;
    private Timestamp created_at;
    private String json_data;

//    private Consulting consulting;
    private DomainLink domain_link;
    private Dashboard dashboard;



}
