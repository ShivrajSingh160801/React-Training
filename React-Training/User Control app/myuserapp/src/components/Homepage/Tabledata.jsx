
const getSupplierData = async () => {
  try {
    const response = await fetch('http://localhost:3001/user/getSupplier');
    const data = await response.json();

    const suppliers = data.data.Suppliers.map(supplier => supplier.supplier);

    const updatedData = suppliers.map(supplier => ({
      Supplier: supplier,
      "Custom 1": 0.0,
      "Custom 2": 0.0,
      "Custom 3": 0.0,
      "Custom 4": 0.0,
      "Custom 5": 0.0,
      "Custom 6": 0.0,
      "Custom 7": 0.0,
      "Custom 8": 0.0,
      "Custom 9": 0.0,
      "Custom 10": 0.0,
      Net: 0.0,
      VAT: 0.0,
      Advance: 0.0,
      Balance: 0.0,
    }));
    return updatedData;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default getSupplierData;
