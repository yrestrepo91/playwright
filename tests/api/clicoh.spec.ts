import { test, expect, request } from '@playwright/test';

test('Crear turno correcto respetando reglas de estado', async ({ request }) => {
  const token = "Bearer <token>";

  // Setup: construir request
  const payload = {
    distributionCenterId: 7,
    date: "2025-03-02",
    time: "09:00",
    projectedPackages: 1300,
    createdBy: "adminQA"
  };

  const res = await request.post('/turns', {
    headers: { Authorization: token, 'Content-Type': 'application/json' },
    data: payload
  });

  expect(res.status()).toBe(201);
  const body = await res.json();

  // Assert principal
  expect(body.turnId).toBeDefined();
  expect(["Created","Open"]).toContain(body.status);

  // Validación específica liberación automática
  if (payload.time < "10:00") {
    expect(body.status).toBe("Open");
  } else {
    expect(body.status).toBe("Created");
  }
});
