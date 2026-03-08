import { Box, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const MotionBox = motion(Box);

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Custom Tattoos", href: "/services#custom" },
    { label: "Cover-Ups", href: "/services#coverup" },
    { label: "Consultations", href: "/services#consultation" },
  ],
};

const socialLinks = [
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/wagno.ink/",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: WhatsAppIcon,
    link: "https://wa.me/351910848391",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: EmailIcon,
    link: "mailto:Wagno.ink@icloud.com",
    label: "Email",
    color: "#EA4335",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          maxWidth: 1400,
          width: "100%",
          alignSelf: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 8 }, // 🔥 Reduced padding
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, md: 8 }, // 🔥 Gap instead of margin
        }}
      >
        {/* Top Section - Brand + Links */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "2fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, md: 6 }, // 🔥 Reduced gap
          }}
        >
          {/* Brand Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2, // 🔥 Gap between elements
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: 2,
                background: "linear-gradient(135deg, #ffffff, #c62828)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              WAGNO TATTOO
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Precision-driven tattoo artistry in Porto.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1.5, pt: 1 }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      background: "rgba(26,26,26,0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",

                      "&:hover": {
                        borderColor: `${social.color}60`,
                        background: `${social.color}20`,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Icon sx={{ color: social.color, fontSize: 20 }} />
                  </Link>
                );
              })}
            </Box>
          </MotionBox>

          {/* Explore Links */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2, // 🔥 Gap between title and links
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                color: "white",
              }}
            >
              EXPLORE
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.explore.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    width: "fit-content",

                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </MotionBox>

          {/* Services Links */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                color: "white",
              }}
            >
              SERVICES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    width: "fit-content",

                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </MotionBox>

          {/* Contact Info */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                color: "white",
              }}
            >
              CONTACT
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
                Porto, Portugal
              </Typography>
              <Link
                href="tel:+351910848391"
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  textDecoration: "none",
                  width: "fit-content",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                +351 910 848 391
              </Link>
              <Link
                href="mailto:Wagno.ink@icloud.com"
                sx={{
                  fontSize: 14,
                  color: "text.secondary",
                  textDecoration: "none",
                  width: "fit-content",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Wagno.ink@icloud.com
              </Link>
            </Box>
          </MotionBox>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 6,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "text.secondary",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © {new Date().getFullYear()} Wagno Tattoo. All rights reserved.
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "text.disabled",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            Designed & Built by{" "}
            <Link
              href="https://www.linkedin.com/in/fatima-alves-azevedodo-271ab1212"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",

                "&:hover": {
                  color: "primary.light",
                  textDecoration: "underline",
                },
              }}
            >
              Fátima Azevedo
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Scroll to Top Button */}
      <Box
        component="button"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 50,
          height: 50,
          borderRadius: 2,
          background:
            "linear-gradient(135deg, rgba(198,40,40,0.9), rgba(142,0,0,0.9))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "&:hover": {
            transform: "translateY(-4px)",
            background:
              "linear-gradient(135deg, rgba(198,40,40,1), rgba(142,0,0,1))",
            boxShadow: "0 12px 32px rgba(198,40,40,0.4)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </Box>
    </Box>
  );
};

export default Footer;
