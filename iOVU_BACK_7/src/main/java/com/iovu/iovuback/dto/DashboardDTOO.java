package com.iovu.iovuback.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DashboardDTOO {
    private Integer dashboard_id;
    private Integer report_id;
    private Integer result_summary;
    private double brand_rate1;
    private Integer brand_rate2;
    private Integer brand_rank;
    private double domain_rate1;
    private Integer domain_rate2;
    private Integer brand_mention;
}
