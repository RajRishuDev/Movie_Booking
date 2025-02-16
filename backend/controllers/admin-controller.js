export const getAllAdmins = async (req, res) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admins = await Admin.find();

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getAdminById = async (req, res) => {
  const token = req.headers["x-access-token"];
  const { id } = req.params;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateAdmin = async (req, res) => {
  const token = req.headers["x-access-token"];
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true, runValidators: true }
    );

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteAdmin = async (req, res) => {
  const token = req.headers["x-access-token"];
  const { id } = req.params;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  console.log("Token:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log(
      `${admin.name} with email ${admin.email} and id ${admin._id} logged in successfully`
    );

    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ admin, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const signupAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ name, email, password: hashedPassword });

    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
