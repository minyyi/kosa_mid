package com.iovu.iovuback.service;

import com.iovu.iovuback.domain.Dashboard;
import com.iovu.iovuback.mapper.DashboardMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {
    private DashboardMapper dashBoardMapper;

        public DashboardService(DashboardMapper dashBoardMapper) {

            this.dashBoardMapper = dashBoardMapper;
        }

    public Dashboard getDashboard(Long reportId) {
        return dashBoardMapper.getDashboard(reportId);
    }


}
