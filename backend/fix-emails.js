const mongoose = require('mongoose');
const Employee = require('./models/Employee');
require('dotenv').config();

async function fixEmailAddresses() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hr_letters';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // Check current email status
    console.log('\n📊 Current email status:');
    const totalEmployees = await Employee.countDocuments();
    const employeesWithEmails = await Employee.countDocuments({ email: { $exists: true, $ne: '' } });
    const employeesWithoutEmails = totalEmployees - employeesWithEmails;
    
    console.log(`Total employees: ${totalEmployees}`);
    console.log(`Employees with emails: ${employeesWithEmails}`);
    console.log(`Employees without emails: ${employeesWithoutEmails}`);

    // Show some examples
    console.log('\n🔍 Sample employees:');
    const sampleEmployees = await Employee.find().limit(5);
    sampleEmployees.forEach(emp => {
      console.log(`${emp.employeeId}: ${emp.name} - Email: "${emp.email || 'NO EMAIL'}"`);
    });

    // Update all employees to have the default email (except Aarav Mehta)
    console.log('\n🔄 Updating email addresses...');
    
    const updateResult = await Employee.updateMany(
      { 
        employeeId: { $ne: 'ABC0013' } // Exclude Aarav Mehta
      },
      { 
        $set: { email: 'ram.bhupesh@symphonytalent.com' } 
      }
    );

    // Update Aarav Mehta specifically
    const aaravUpdate = await Employee.updateOne(
      { employeeId: 'ABC0013' },
      { $set: { email: 'rambhupesh05@gmail.com' } }
    );

    console.log(`✅ Updated ${updateResult.modifiedCount} employees to default email`);
    console.log(`✅ Updated Aarav Mehta (ABC0013) to admin email`);

    // Verify the updates
    console.log('\n📊 Updated email status:');
    const updatedTotal = await Employee.countDocuments();
    const updatedWithEmails = await Employee.countDocuments({ email: { $exists: true, $ne: '' } });
    
    console.log(`Total employees: ${updatedTotal}`);
    console.log(`Employees with emails: ${updatedWithEmails}`);

    // Show updated examples
    console.log('\n🔍 Updated sample employees:');
    const updatedSample = await Employee.find().limit(5);
    updatedSample.forEach(emp => {
      console.log(`${emp.employeeId}: ${emp.name} - Email: "${emp.email}"`);
    });

    console.log('\n🎉 Email addresses updated successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 MongoDB connection closed');
  }
}

// Run the script
fixEmailAddresses();
