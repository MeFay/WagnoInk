import { Box, Typography, TextField, CircularProgress, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import { typeScale } from "../../styles/theme";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SectionContainer from "../../components/SectionContainer";
import CustomButton from "../../components/UI/Button";
import {
  WHATSAPP_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
} from "../../config/contact";


const MotionBox = motion(Box);

// I use EmailJS to send emails directly from the browser — no backend or server needed.
// The keys are stored in .env (VITE_EMAILJS_*) so they're not exposed in the source code.
const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

const ContactSection = ({ sx, innerSx }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  // status controls what the form shows: the form itself, a loading spinner, a success message, or an error
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const contactInfo = [
    { icon: LocationOnIcon, label: t("contact.locationLabel"), value: "Porto, Portugal", link: MAPS_URL,           color: theme.palette.text.secondary, hoverColor: theme.palette.primary.main },
    { icon: PhoneIcon,      label: t("contact.phoneLabel"),    value: CONTACT_PHONE,     link: CONTACT_PHONE_LINK, color: theme.palette.text.secondary, hoverColor: theme.palette.whatsapp.main },
    { icon: EmailIcon,      label: t("contact.emailLabel"),    value: CONTACT_EMAIL,     link: `mailto:${CONTACT_EMAIL}`, color: theme.palette.text.secondary, hoverColor: theme.palette.accent.main },
    { icon: InstagramIcon,  label: t("contact.instagramLabel"),value: "@wagno.ink",      link: INSTAGRAM_URL,      color: theme.palette.text.secondary, hoverColor: theme.palette.instagram.main },
  ];

  const studioHours = [
    { day: t("contact.mon_fri"), hours: "09:30 AM - 8:00 PM" },
    { day: t("contact.saturday"), hours: "09:30 AM - 8:00 PM" },
    { day: t("contact.sunday"), hours: t("contact.closed") },
  ];

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
    if (!form.name.trim()) next.name = t("contact.errorName");
    if (!form.email.trim()) next.email = t("contact.errorEmailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t("contact.errorEmailInvalid"); // basic email format regex
    if (!form.message.trim()) next.message = t("contact.errorMessage");
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined })); // clear the error for this field as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) { setErrors(next); return; }

    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
  <SectionContainer id="section-contact" sx={sx} innerSx={innerSx}>
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
      <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 340, pb: { md: 0.5 } }}>
        {t("contact.introDescription")}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: { xs: "flex-start", md: "flex-end" }, textAlign: { xs: "left", md: "right" } }}>
        <Typography sx={{ fontSize: typeScale.label, fontWeight: 600, letterSpacing: 4, color: "accent.main", textTransform: "uppercase" }}>
          {t("contact.label")}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>
          {t("contact.title").split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </Typography>
      </Box>
    </MotionBox>

    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 4, md: 6 } }}>

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
                  "&:hover": { borderColor: alpha(info.hoverColor, 0.3), transform: "translateX(8px)", background: "rgba(26,26,26,0.8)" },
                  "&:hover .contact-icon-box": { background: `linear-gradient(135deg, ${alpha(info.hoverColor, 0.2)}, ${alpha(info.hoverColor, 0.08)})`, borderColor: alpha(info.hoverColor, 0.3) },
                  "&:hover .contact-icon": { color: info.hoverColor },
                }}
              >
                <Box className="contact-icon-box" sx={{ width: 50, height: 50, borderRadius: 2, background: `linear-gradient(135deg, ${alpha(info.color, 0.2)}, ${alpha(info.color, 0.08)})`, border: `1px solid ${alpha(info.color, 0.3)}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s ease" }}>
                  <Icon className="contact-icon" sx={{ color: info.color, fontSize: 24, transition: "color 0.3s ease" }} />
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

        <MotionBox
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}
          sx={{ p: 4, borderRadius: 3, background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <AccessTimeIcon sx={{ color: "primary.main", fontSize: 24 }} />
            <Typography sx={{ fontSize: 18, fontWeight: 700, color: "white", letterSpacing: 0.5 }}>
              {t("contact.hoursTitle")}
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

      <MotionBox
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}
        sx={{ p: { xs: 4, md: 5 }, borderRadius: 3, background: "rgba(26,26,26,0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "white" }}>
            {t("contact.formTitle")}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            {t("contact.formSubtitle")}
          </Typography>
        </Box>

        {status === "success" ? (
          <Box sx={{ py: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, textAlign: "center" }}>
            <Typography sx={{ fontSize: 40 }}>✓</Typography>
            <Typography sx={{ fontWeight: 700, color: "white", fontSize: 18 }}>{t("contact.successTitle")}</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              {t("contact.successSubtitle")}
            </Typography>
            <CustomButton variant="secondary" size="small" onClick={() => setStatus("idle")}>
              {t("contact.sendAnother")}
            </CustomButton>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              fullWidth label={t("contact.nameInput")} variant="outlined" required
              name="name" value={form.name} onChange={handleChange}
              error={!!errors.name} helperText={errors.name}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label={t("contact.emailInput")} variant="outlined" type="email" required
              name="email" value={form.email} onChange={handleChange}
              error={!!errors.email} helperText={errors.email}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label={t("contact.phoneInput")} variant="outlined"
              name="phone" value={form.phone} onChange={handleChange}
              sx={textFieldSx}
            />
            <TextField
              fullWidth label={t("contact.messageInput")} variant="outlined" multiline rows={5} required
              name="message" value={form.message} onChange={handleChange}
              error={!!errors.message} helperText={errors.message}
              sx={textFieldSx}
            />

            {status === "error" && (
              <Typography sx={{ fontSize: 13, color: "error.main" }}>
                {t("contact.errorSubmit")}
              </Typography>
            )}

            <CustomButton size="large" fullWidth disabled={status === "loading"}>
              {status === "loading" ? <CircularProgress size={18} sx={{ color: "white" }} /> : <>{t("contact.submitBtn")} <ArrowForwardIcon sx={{ fontSize: 18 }} /></>}
            </CustomButton>
          </Box>
        )}
      </MotionBox>
    </Box>

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
          {t("contact.whatsappTitle")}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          {t("contact.whatsappDesc")}
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
          {t("contact.whatsappBtn")}
        </CustomButton>
    </MotionBox>
  </SectionContainer>
  );
};

export default ContactSection;
