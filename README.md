# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator.  Incorrect usage can cause unexpected behavior when decrementing a counter and attempting to go below zero.

## Bug Description

The provided code snippet shows an incorrect usage of the `$inc` operator. If the `counter` field is already 0 or a negative number, attempting to decrement it further using `$inc: {-1}` will lead to a negative counter, which is not always the desired behavior.