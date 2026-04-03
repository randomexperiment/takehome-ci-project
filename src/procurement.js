function createPurchaseRequest({ employee, amount, vendor }) {
  if (!employee || !vendor) {
    throw new Error('Missing required data');
  }


  if (amount == null || amount === '' || amount <= 0) {
    throw new Error('Invalid amount');
  }

  return {
    id: generateId(),
    employee,
    vendor,
    amount,
    status: determineApproval(amount)
  };
}
//simple function to determine approval status based on amount.
function determineApproval(amount) {
  if (amount <= 500) {
    return 'AUTO_APPROVED';
  }
  return 'PENDING_APPROVAL';
}

//simple function to generate a random id for the purchase request to keep it unique.
function generateId() {
  return Math.random().toString(20).substring(2, 10);
}

module.exports = {
  createPurchaseRequest,
  determineApproval
};