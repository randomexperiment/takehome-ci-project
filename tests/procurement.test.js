//simple test suite for procurement logic verification.

const {
  createPurchaseRequest
} = require('../src/procurement');

describe('Procurement Workflow', () => {

  test('creates valid request', () => {
    const req = createPurchaseRequest({
      employee: 'Anna',
      amount: 500,
      vendor: 'Company1'
    });

    expect(req.status).toBe('AUTO_APPROVED');
  });

  test('requires approval for high amount', () => {
    const req = createPurchaseRequest({
      employee: 'Brian',
      amount: 5000,
      vendor: 'Company2'
    });

    expect(req.status).toBe('PENDING_APPROVAL');
  });

  test('fails on missing fields', () => {
    expect(() => {
      createPurchaseRequest({
        employee: '',
        amount: 100,
        vendor: 'Company3'
      });
    }).toThrow();
  });

  test('should generate unique request IDs', () => {
  const purchaseRequestId1 = createPurchaseRequest({
    employee: 'Jane',
    amount: 100,
    vendor: 'Company4'
  });

  const purchaseRequestId2 = createPurchaseRequest({
    employee: 'Zane',
    amount: 100,
    vendor: 'Company5'
  });

  expect(purchaseRequestId1).not.toBe(purchaseRequestId2);
});

});