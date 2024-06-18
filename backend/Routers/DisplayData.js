const express = require('express');
const router = express.Router();

router.post('/statistics', async (req,res)=>{
    try { 
        if (global.json_data !== undefined) {
            res.send([global.json_data]);
          } else {
            res.status(404).json({ success: false, error: 'Data not found' });
          }
        
    } catch (error) {
        console.error('Error Displaying data:', error);
        res.json({ success: false, error: error.message }); 
    }
})
module.exports =router;