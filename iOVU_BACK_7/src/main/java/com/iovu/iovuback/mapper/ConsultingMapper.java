package com.iovu.iovuback.mapper;

import com.iovu.iovuback.domain.Consulting;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ConsultingMapper {
    List<Consulting> getConsulting(@Param("reportDetailId") Long reportDetailId);
}
