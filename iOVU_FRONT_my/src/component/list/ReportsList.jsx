import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Stack,
  Pagination,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const columns = [
  { field: "prompt", headerName: "검색 프롬프트", width: 200 },
  { field: "volume", headerName: "데이터 볼륨", width: 130 },
  { field: "date", headerName: "날짜", width: 150 },
  {
    field: "actions",
    headerName: "",
    flex: 1,
    renderCell: () => (
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <Button variant="contained" size="small">
          보고서
        </Button>
        <Button variant="contained" size="small">
          컨설팅
        </Button>
        <Button variant="contained" size="small">
          대시보드
        </Button>
      </Stack>
    ),
    sortable: false,
    filterable: false,
  },
];

const initialRows = [
  { id: 1, prompt: "뭐시키1", volume: 11, date: "2025.01.01" },
  { id: 2, prompt: "뭐시키2", volume: 12, date: "2025.01.02" },
  { id: 3, prompt: "뭐시키3", volume: 13, date: "2025.01.03" },
  { id: 4, prompt: "뭐시키4", volume: 14, date: "2025.01.04" },
];

const ReportsGrid = () => {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(1);
  const [selectionModel, setSelectionModel] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // 삭제 확인 다이얼로그 상태
  const [rowsToDelete, setRowsToDelete] = useState([]); // 삭제할 항목을 임시로 저장
  const pageSize = 2; // 한 페이지에 표시할 행 수

  const handleDelete = () => {
    // if (selectionModel.length === 0) {
    //   alert("삭제할 항목을 선택하세요.");
    //   return;
    // }
    const rowsToDeleteList = rows.filter((row) =>
      selectionModel.includes(row.id)
    );
    setRowsToDelete(rowsToDeleteList);
    setOpenDialog(true); // 삭제 확인 다이얼로그 열기
  };

  const handleConfirmDelete = () => {
    // 선택된 항목들 삭제
    setRows((prevRows) =>
      prevRows.filter((row) => !selectionModel.includes(row.id))
    );
    setSelectionModel([]); // 삭제 후 선택된 항목 초기화
    setRowsToDelete([]); // 삭제할 항목 리스트 초기화
    setOpenDialog(false); // 다이얼로그 닫기
    setPage(1); // 삭제 후 페이지 리셋
  };

  const handleCancelDelete = () => {
    setOpenDialog(false); // 다이얼로그 닫기
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows.slice((page - 1) * pageSize, page * pageSize)} // 페이지에 맞게 데이터 슬라이싱
        columns={columns}
        disableColumnMenu
        hideFooter
        checkboxSelection
        disableRowSelectionOnClick
        onSelectionModelChange={(newSelection) =>
          setSelectionModel(newSelection.selectionModel)
        }
        selectionModel={selectionModel} // 선택된 행을 관리
        sx={{
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
          "& .MuiDataGrid-root": {
            outline: "none", // 클릭 시 나타나는 네모 border 제거
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none", // 셀 포커스 시 나타나는 네모 border 제거
          },
        }}
      />
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        선택된 항목 삭제
      </Button>
      <Pagination
        count={Math.ceil(rows.length / pageSize)} // 총 페이지 수 계산
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center" }}
      />

      {/* 삭제된 항목 확인 다이얼로그 */}
      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>삭제 확인</DialogTitle>
        <DialogContent>
          <Typography>
            선택한 항목을 삭제하시겠습니까? 삭제된 항목은 복구할 수 없습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            취소
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            삭제
          </Button>
        </DialogActions>
      </Dialog>

      {/* 삭제된 항목이 있을 경우 표시 */}
      {rowsToDelete.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h6">삭제된 항목</Typography>
          <ul>
            {rowsToDelete.map((deletedRow) => (
              <li key={deletedRow.id}>
                {deletedRow.prompt} - {deletedRow.volume} - {deletedRow.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReportsGrid;
