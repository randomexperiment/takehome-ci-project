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

test('should flag if two purchase requests came from the same company for the same amount', () => {
  const purchaseRequestId1 = createPurchaseRequest({
    employee: 'Siya',
    amount: 100,
    vendor: 'Company4'
  });

  const purchaseRequestId2 = createPurchaseRequest({
    employee: 'Jiya',
    amount: 100,
    vendor: 'Company4'
  });

  if 
    (purchaseRequestId1.vendor === purchaseRequestId2.vendor &&  purchaseRequestId1.amount === purchaseRequestId2.amount)
     {
        console.log('Warning: Two purchase requests from the same company for the same amount detected!!');
  }


});

});