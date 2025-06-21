import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contactsFile = path.join(__dirname, '../data/contacts.json');

// Ensure contacts.json exists
fs.ensureFileSync(contactsFile);
if (!fs.existsSync(contactsFile) || fs.readFileSync(contactsFile, 'utf8') === '') {
  fs.writeJsonSync(contactsFile, []);
}

// Middleware to parse JSON bodies
router.use(express.json());

// Contact form endpoint
router.post('/contact', async (req, res) => {
  const { name, mobile } = req.body;

  // Basic validation
  if (!name || !mobile) {
    return res.status(400).json({ error: 'Name and mobile number are required' });
  }

  // Validate mobile format (basic example: 10 digits)
  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ error: 'Mobile number must be 10 digits' });
  }

  try {
    // Read existing contacts
    const contacts = await fs.readJson(contactsFile);

    // Add new contact
    const newContact = {
      id: contacts.length + 1,
      name,
      mobile,
      timestamp: new Date().toISOString(),
    };
    contacts.push(newContact);

    // Save updated contacts
    await fs.writeJson(contactsFile, contacts, { spaces: 2 });

    console.log(`Saved contact: Name - ${name}, Mobile - ${mobile}`);

    // Send response
    res.status(200).json({
      message: 'Thank you for your interest! We will get in touch with you shortly.',
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

export default router;