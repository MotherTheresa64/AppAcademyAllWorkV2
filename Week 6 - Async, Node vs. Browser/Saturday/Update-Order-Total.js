/* Write a function, updateOrderTotal, that takes an existing
order total and adjusts it based on an updates array of objects where each
object contains a name, price, and status. Based on the status, each item's
price should either be added or removed from the running order total. Write a
recursive solution to solve this problem. Note: Carefully check the example
inputs and outputs before planning your implementation. */

function updateOrderTotal(orderTotal, updates) {
    // Base case: If there are no updates, return the current order total.
    if (updates.length === 0) {
      return orderTotal;
    }
  
    // Get the first update from the updates array.
    const [firstUpdate, ...remainingUpdates] = updates;
  
    // Extract the properties from the update object.
    const { name, price, status } = firstUpdate;
  
    // Calculate the updated order total based on the status of the update.
    let updatedTotal = orderTotal;
    if (status === "add") {
      updatedTotal += price;
    } else if (status === "remove") {
      updatedTotal -= price;
    }
  
    // Recursively call the function with the updated total and the remaining updates.
    return updateOrderTotal(updatedTotal, remainingUpdates);
  }
  
  // Example usage:
  const initialTotal = 100;
  const updates = [
    { name: "item1", price: 20, status: "add" },
    { name: "item2", price: 30, status: "add" },
    { name: "item1", price: 20, status: "remove" },
  ];
  
  const finalTotal = updateOrderTotal(initialTotal, updates);
  console.log(finalTotal); // Output: 130
  