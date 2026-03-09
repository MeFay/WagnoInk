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
  { icon: InstagramIcon, link: "https://www.instagram.com/wagno.ink/", label: "Instagram", color: "#E4405F" },
  { icon: WhatsAppIcon, link: "https://wa.me/351910848391", label: "WhatsApp", color: "#25D366" },
  { icon: EmailIcon, link: "mailto:Wagno.ink@icloud.com", label: "Email", color: "#EA4335" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Same outer padding as Navbar and SectionContainer */}
      <Box
        sx={{
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
          py: { xs: 6, md: 8 },
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "2fr 1fr 1fr 1fr" },
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Brand */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: 2 }}>
              WAGNO TATTOO
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Precision-driven tattoo artistry in Porto.
            </Typography>
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
                      width: 40, height: 40, borderRadius: 2,
                      background: "rgba(26,26,26,0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": { borderColor: `${social.color}60`, background: `${social.color}20`, transform: "translateY(-3px)" },
                    }}
                  >
                    <Icon sx={{ color: social.color, fontSize: 20 }} />
                  </Link>
                );
              })}
            </Box>
          </MotionBox>

          {/* Explore */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "white" }}>
              EXPLORE
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.explore.map((link) => (
                <Link key={link.label} href={link.href} sx={{ color: "text.secondary", fontSize: 14, textDecoration: "none", width: "fit-content", transition: "all 0.3s ease", "&:hover": { color: "primary.main", transform: "translateX(4px)" } }}>
                  {link.label}
                </Link>
              ))}
            </Box>
          </MotionBox>

          {/* Services */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "white" }}>
              SERVICES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {footerLinks.services.map((link) => (
                <Link key={link.label} href={link.href} sx={{ color: "text.secondary", fontSize: 14, textDecoration: "none", width: "fit-content", transition: "all 0.3s ease", "&:hover": { color: "primary.main", transform: "translateX(4px)" } }}>
                  {link.label}
                </Link>
              ))}
            </Box>
          </MotionBox>

          {/* Contact */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, color: "white" }}>
              CONTACT
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ fontSize: 14, color: "text.secondary" }}>Porto, Portugal</Typography>
              <Link href="tel:+351910848391" sx={{ fontSize: 14, color: "text.secondary", textDecoration: "none", width: "fit-content", transition: "color 0.3s ease", "&:hover": { color: "primary.main" } }}>
                +351 910 848 391
              </Link>
              <Link href="mailto:Wagno.ink@icloud.com" sx={{ fontSize: 14, color: "text.secondary", textDecoration: "none", width: "fit-content", transition: "color 0.3s ease", "&:hover": { color: "primary.main" } }}>
                Wagno.ink@icloud.com
              </Link>
            </Box>
          </MotionBox>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Typography sx={{ fontSize: 13, color: "text.secondary", textAlign: { xs: "center", md: "left" }, width: { xs: "100%", md: "auto" } }}>
            © {new Date().getFullYear()} Wagno Tattoo. All rights reserved.
          </Typography>

          {/* Credit + scroll-to-top inline */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "space-between", md: "flex-end" }, width: { xs: "100%", md: "auto" }, gap: 2 }}>
            <Typography sx={{ fontSize: 13, color: "text.disabled" }}>
              Designed & Built by{" "}
              <Link
                href="https://www.linkedin.com/in/fatima-alves-azevedodo-271ab1212"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "primary.main", textDecoration: "none", fontWeight: 600, transition: "color 0.3s ease", "&:hover": { color: "primary.light" } }}
              >
                Fátima Azevedo
              </Link>
            </Typography>

            {/* Scroll to top — inline, no fixed positioning */}
            <Box
              component="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                background: "rgba(198,40,40,0.15)",
                border: "1px solid rgba(198,40,40,0.3)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(198,40,40,0.3)",
                  borderColor: "rgba(198,40,40,0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <ArrowUpwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;