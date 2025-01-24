import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    time: "",
    serviceOfInterest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_h0qffrc",
        "template_uiwm26u",
        {
          from_name: formData.name,
          to_name: "Techbor",
          from_email: formData.email,
          phone: formData.phone,
          preferred_date: formData.preferredDate,
          preferred_time: formData.time,
          service: formData.serviceOfInterest,
          message: formData.message,
        },
        "mnQvg5uQfSbVY8bSR"
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          time: "",
          serviceOfInterest: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div>
      <section className="bg-gray-100 w-full px-4 py-16 md:py-24 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Book Consultation</h2>
              <p className="text-gray-600">
                For more information about Techbor, our services, or to explore
                how we can assist you, please fill out the form. Our team will
                get in touch with you promptly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "success" && (
                <div className="bg-green-50 text-green-800 rounded-md p-4 mb-4">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 text-red-800 rounded-md p-4 mb-4">
                  Failed to send message. Please try again.
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9+\s-]{10,}"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select
                name="serviceOfInterest"
                value={formData.serviceOfInterest}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Service of Interest
                </option>
                <option value="Custom Software Solutions">
                  Custom Software Solutions
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Web Application Development">
                  Web Application Development
                </option>
                <option value="Business Setup Services">
                  Business Setup Services
                </option>
                <option value="Website Design & Development">
                  Website Design & Development
                </option>
                <option value="CRM/ERP Solutions">CRM/ERP Solutions</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="API Integration">API Integration</option>
                <option value=" Business Process Automation">
                  Business Process Automation
                </option>
                <option value="IoT Solutions">IoT Solutions</option>
                <option value="Data Analysis / Business Intelligence Analysis">
                  Data Analysis / Business Intelligence Analysis
                </option>
                <option value="Project Management">Project Management</option>
                <option value="Business Analysis">Business Analysis</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
