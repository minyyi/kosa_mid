package com.iovu.iovuback.service;

import com.iovu.iovuback.domain.Consulting;
import com.iovu.iovuback.mapper.ConsultingMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultingService {
    private ConsultingMapper consultingMapper;

    public ConsultingService(ConsultingMapper consultingMapper) {
        this.consultingMapper = consultingMapper;
    }

    public List<Consulting> getConsulting(Long reportDetailId) {
        return consultingMapper.getConsulting(reportDetailId);
    }

}
