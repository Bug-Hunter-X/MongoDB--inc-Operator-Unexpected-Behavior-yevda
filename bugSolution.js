```javascript
// Correct usage of $inc with conditional update
db.collection.updateOne({"_id":ObjectId("someId"),"counter":{$gt:0}},{$inc:{counter:-1}});

//Alternative solution: using $max operator to prevent negative values
db.collection.updateOne({"_id":ObjectId("someId")},{$max:{"counter":0}});
```