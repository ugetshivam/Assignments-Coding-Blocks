const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Show All Employees
router.get('/employees', async (req,res)=>{
    const employees = await Employee.find({});
    res.render('employees/index', {employees});
});

// Create a new employee
router.get('/employees/new', (req,res)=>{
    res.render('employees/new');
});

//Make changes with payload
router.post('/employees', async (req,res)=>{
    const newEmployee = {
        ...req.body
    };

    await Employee.create(newEmployee);
    res.redirect('/employees');
});
// show employee
router.get('/employees/:id', async (req, res) => {
    
    const { id } = req.params;

    const employee = await Employee.findById(id);

    res.render('employees/show', { employee });
});

// get a prefilled form for editing
router.get('/employees/:id/edit', async (req,res)=>{
    const {id} = req.params;

    const employee = await Employee.findById(id);

    res.render('employees/edit', {employee});
});
// updating the employee with the given payload
router.patch('/employees/:id', async (req, res) => {
    
    const updatedEmployee = req.body;
    if(updatedEmployee.status === 'on'){
        updatedEmployee.status = true;
    }
    else{
        updatedEmployee.status = false;
    }
    const { id } = req.params;
    // console.log(updatedEmployee);
    await Employee.findByIdAndUpdate(id, updatedEmployee);


    res.redirect(`/employees/${id}`);
});


router.delete('/employees/:id', async (req, res) => {

    const { id } = req.params;
    
    await Employee.findOneAndDelete(id);

    res.redirect('/employees');
});

module.exports = router;