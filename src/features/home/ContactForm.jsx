import { Box, Typography, TextField, CircularProgress, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { typeScale } from "../../styles/theme";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SectionContainer from "../../components/SectionContainer";
import CustomButton from "../../components/UI/Button";


const MotionBox = motion(Box);

const contactInfo = [
  { icon: LocationOnIcon, label: "Studio Location", value: "Porto, Portugal", link: "https://maps.google.com" },
  { icon: PhoneIcon, label: "Phone", value: "+351 910 848 391", link: "tel:+351910848391" },
  { icon: EmailIcon, label: "Email", value: "wagnotattoo@gmail.com", link: "mailto:wagnotattoo@gmail.com" },
  { icon: InstagramIcon, label: "Instagram", value: "@wagnotattoo", link: "https://instagram.com/wagnotattoo" },
];

const studioHours = [
  { day: "Monday - Friday", hours: "10:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const WHATSAPP_URL = "https://wa.me/351910848391?text=Olá!%20Quero%20agendar%20uma%20tatuagem.";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

const ContactSection = ({ sx, innerSx }) => {
  const theme = useTheme();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
      "&:hover fieldset": { borderColor: alpha(theme.palette.primary.main, 0.3) },
      "&.Mui-focused fieldset": { borderColor: "primary.main" },
    },
    "& .MuiInputLabel-root": { color: "text.secondary" },
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!form.message.trim()) next.message = "Please describe your tattoo idea.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) { setErrors(next); return; }

    setStatus("loading");
    try {
      // Replace this with your actual form submission endpoint.
      // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      await new Promise((res) => setTimeout(res, 1200)); // simulated delay
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
  <SectionContainer id="section-contact" sx={sx} innerSx={innerSx}>
    {/* Header — mirrored from FeaturedWork: description bottom-left, title right */}
    <MotionBox
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-end" },
        justifyContent: "space-between",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* Description — bottom-left */}
      <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 340, pb: { md: 0.5 } }}>
        Ready to bring your vision to life? Reach out to discuss your next tattoo.
      </Typography>

      {/* Title block — right */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: { xs: "flex-start", md: "flex-end" }, textAlign: { xs: "left", md: "right" } }}>
        <Typography sx={{ fontSize: typeScale.label, fontWeight: 600, letterSpacing: 4, color: "accent.main", textTransform: "uppercase" }}>
          Get in Touch
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>
          Let's Create<br />Something Amazing
        </Typography>
      </Box>
    </MotionBox>

    {/* Main Content Grid */}
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 4, md: 6 } }}>

      {/* Left — Contact Info + Hours */}
      <MotionBox
        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <MotionBox
                key={info.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
                component="a"
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                sx={{
                  display: "flex", alignItems: "center", gap: 2.5, p: 3,
                  borderRadius: 3, background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none", transition: "all 0.3s ease",
                  "&:hover": { borderColor: alpha(theme.palette.primary.main, 0.3), transform: "translateX(8px)", background: "rgba(26,26,26,0.8)" },
                }}
              >
                <Box sx={{ width: 50, height: 50, borderRadius: 2, background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.primary.dark, 0.2)})`, border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon sx={{ color: "primary.main", fontSize: 24 }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                  <Typography sx={{ fontSize: 12, color: "text.secondary", fontWeight: 500, letterSpacing: 1 }}>
                    {info.label}
                  </Typography>
                  <Typography sx={{ fontSize: 16, color: "white", fontWeight: 600 }}>
                    {info.value}
                  </Typography>
                </Box>
              </MotionBox>
            );
          })}
        </Box>

        {/* Studio Hours */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
          sx={{ p: 4, borderRadius: 3, background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <AccessTimeIcon sx={{ color: "primary.main", fontSize: 24 }} />
            <Typography sx={{ fontSize: 18, fontWeight: 700, color: "white", letterSpacing: 0.5 }}>
              Studio Hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {studioHours.map((schedule, index) => (
              <Box key={schedule.day} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: index !== studioHours.length - 1 ? 2 : 0, borderBottom: index !== studioHours.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <Typography sx={{ fontSize: 14, color: "text.secondary", fontWeight: 500 }}>
                  {schedule.day}
                </Typography>
                <Typography sx={{ fontSize: 14, color: "white", fontWeight: 600 }}>
                  {schedule.hours}
                </Typography>
              </Box>
            ))}
          </Box>
        </MotionBox>
      </MotionBox>

      {/* Right — Form */}
      <MotionBox
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
        sx={{ p: { xs: 4, md: 5 }, borderRadius: 3, background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "white" }}>
            Send us a Message
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Fill out the form below and we'll get back to you within 24 hours.
          </Typography>
        </Box>

        {status === "success" ? (
          <Box sx={{ py: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, textAlign: "center" }}>
            <Typography sx={{ fontSize: 40 }}>✓</Typography>
            <Typography sx={{ fontWeight: 700, color: "white", fontSize: 18 }}>Message sent!</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              We'll get back to you within 24 hours.
            </Typography>
            <CustomButton variant="secondary" size="small" onClick={() => setStatus("idle")}>
              Send another
            </CustomButton>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              fullWidth label="Your Name" variant="outlined" required
              name="name" value={form.name} onChange={handleChange}
              error={!!errors.name} helperText={errors.name}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label="Email Address" variant="outlined" type="email" required
              name="email" value={form.email} onChange={handleChange}
              error={!!errors.email} helperText={errors.email}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label="Phone Number (Optional)" variant="outlined"
              name="phone" value={form.phone} onChange={handleChange}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label="Tell us about your tattoo idea" variant="outlined" multiline rows={5} required
              name="message" value={form.message} onChange={handleChange}
              error={!!errors.message} helperText={errors.message}
              sx={textFieldSx}
            />

            {status === "error" && (
              <Typography sx={{ fontSize: 13, color: "error.main" }}>
                Something went wrong. Please try again or contact us via WhatsApp.
              </Typography>
            )}

            <CustomButton size="large" fullWidth>
              {status === "loading" ? <CircularProgress size={18} sx={{ color: "white" }} /> : <>Send Message <ArrowForwardIcon sx={{ fontSize: 18 }} /></>}
            </CustomButton>
          </Box>
        )}
      </MotionBox>
    </Box>

    {/* WhatsApp CTA */}
    <MotionBox
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
      sx={{
        p: 4, borderRadius: 3,
        background: `linear-gradient(135deg, ${alpha(theme.palette.whatsapp.main, 0.1)}, ${alpha(theme.palette.whatsapp.main, 0.05)})`,
        border: `1px solid ${alpha(theme.palette.whatsapp.main, 0.2)}`,
        display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: "white" }}>
          Prefer WhatsApp?
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          Chat with us directly for faster responses and instant booking.
        </Typography>
      </Box>
        <CustomButton
          variant="whatsapp"
          size="large"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ fontSize: 20 }} />
          Open WhatsApp
        </CustomButton>
    </MotionBox>
  </SectionContainer>
  );
};

export default ContactSection;