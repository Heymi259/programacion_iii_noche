
import { Box, TextField, Button, Typography, Card } from "@mui/material";
import PageContainer from "../components/ui/PageContainer";
import { useState } from "react";

export default function OrdersPage() {
  const [base, setBase] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number | null>(null);

  const calculateArea = () => {
    if (base > 0 && height > 0) {
      const result = (base * height) / 2;
      setArea(result);
    }
  };

  return (
    <PageContainer>
      <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
        Calculadora de Área de Triángulo
      </Typography>
      <Card sx={{ p: 3, maxWidth: 400 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Base"
            type="number"
            value={base}
            onChange={(e) => setBase(parseFloat(e.target.value) || 0)}
            fullWidth
          />
          <TextField
            label="Altura"
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            fullWidth
          />
          <Button variant="contained" onClick={calculateArea}>
            Calcular Área
          </Button>
          {area !== null && (
            <Typography variant="h6" sx={{ mt: 2, color: "#1976d2" }}>
              Área: {area.toFixed(2)} unidades²
            </Typography>
          )}
        </Box>
      </Card>
    </PageContainer>
  );
}