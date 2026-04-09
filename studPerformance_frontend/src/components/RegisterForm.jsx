// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./RegisterForm.css"; // external CSS import

// export default function RegisterForm() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [contact, setContact] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("student");

//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const payload = { name, email, contact, password, role };
//             const res = await axios.post("http://localhost:4444/register", payload);
//             alert(res.data.message);
//             navigate("/login");
//         } catch (err) {
//             console.error(err.response?.data);
//             alert(err.response?.data?.error || "Registration failed");
//         }
//     };

//     return (
//         <div className="register-container">
//             <form className="register-form" onSubmit={handleRegister}>
//                 <h2>Register</h2>
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input value={name} onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Contact:</label>
//                     <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </div>
//                 <div className="form-group">
//                     <label>Role:</label>
//                     <select value={role} onChange={(e) => setRole(e.target.value)}>
//                         <option value="student">Student</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="btn-submit">Register</button>
//             </form>
//         </div>
//     );
// }






import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    // Individual field validators
    const validateName = (value) => {
        if (!value.trim()) return "Name is required";
        for (let i = 0; i < value.length; i++) {
            const char = value[i];
            if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || char === " ")) {
                return "Name should contain only letters and spaces";
            }
        }
        return "";
    };

    const validateEmail = (value) => {
        if (!value.trim()) return "Email is required";
        const atPos = value.indexOf("@");
        const dotPos = value.lastIndexOf(".");
        if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= value.length) {
            return "Invalid email address";
        }
        return "";
    };

    const validateContact = (value) => {
        if (!value.trim()) return "Contact is required";
        if (value.length !== 10 || isNaN(value)) return "Contact must be exactly 10 digits";
        return "";
    };

    const validatePassword = (value) => {
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";

        let hasNumber = false;
        let hasSymbol = false;
        const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

        for (let i = 0; i < value.length; i++) {
            const char = value[i];
            if (char >= "0" && char <= "9") hasNumber = true;
            if (symbols.includes(char)) hasSymbol = true;
        }

        if (!hasNumber) return "Password must contain at least one number";
        if (!hasSymbol) return "Password must contain at least one symbol";

        return "";
    };

    // Real-time field change handlers
    const handleNameChange = (e) => {
        setName(e.target.value);
        setErrors((prev) => ({ ...prev, name: validateName(e.target.value) }));
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
    };

    const handleContactChange = (e) => {
        setContact(e.target.value);
        setErrors((prev) => ({ ...prev, contact: validateContact(e.target.value) }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors((prev) => ({ ...prev, password: validatePassword(e.target.value) }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Final validation before submit
        const newErrors = {
            name: validateName(name),
            email: validateEmail(email),
            contact: validateContact(contact),
            password: validatePassword(password),
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some((err) => err)) return;

        try {
            const payload = { name, email, contact, password, role };
            const res = await axios.post("http://localhost:4444/register", payload);
            alert(res.data.message);
            navigate("/login");
        } catch (err) {
            console.error(err.response?.data);
            alert(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>

                <div className="form-group">
                    <label>Name:</label>
                    <input value={name} onChange={handleNameChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Contact:</label>
                    <input type="number" value={contact} onChange={handleContactChange} />
                    {errors.contact && <p className="error">{errors.contact}</p>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn-submit">Register</button>
            </form>
        </div>
    );
}
