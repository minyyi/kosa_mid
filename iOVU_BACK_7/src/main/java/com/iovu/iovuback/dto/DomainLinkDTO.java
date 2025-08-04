package com.iovu.iovuback.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DomainLinkDTO {
    private Integer domain_link_id;
    private Integer report_detail_id;
    private String domain_name;
    private double rate;
    private Integer chatgpt;
    private Integer gemini;
    private String category;

    private List<LinkListDTO> link_list_dto;
}
