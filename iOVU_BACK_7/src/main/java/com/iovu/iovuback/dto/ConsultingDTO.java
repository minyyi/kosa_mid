package com.iovu.iovuback.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConsultingDTO {
    private Integer consulting_id;
    private Integer report_detail_id;
    private String result;
    private String consulting;
}
