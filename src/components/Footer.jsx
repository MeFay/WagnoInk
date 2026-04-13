import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { typeScale } from "../styles/theme";
import { useTranslation } from "react-i18next";

const navLinks = [
  { labelKey: "navbar.home",    to: "/"        },
  { labelKey: "navbar.about",   to: "/about"   },
  { labelKey: "navbar.gallery", to: "/gallery" },
  { labelKey: "navbar.blog",    to: "/blog"    },
  { labelKey: "navbar.info",    to: "/info"    },
];

const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  // behavior: "smooth" makes it animate instead of jumping instantly
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: InstagramIcon, href: "https://www.instagram.com/wagno.ink/", label: "Instagram", color: theme.palette.instagram.main },
    { icon: WhatsAppIcon,  href: "https://wa.me/351910848391",            label: "WhatsApp",  color: theme.palette.whatsapp.main },
    { icon: EmailIcon,     href: "mailto:Wagno.ink@gmail.com",           label: "Email",     color: theme.palette.accent.main },
  ];

  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(255,255,255,0.05)", bgcolor: "background.default" }}>
      <Box sx={{ px: { xs: 3, sm: 5, md: 8, lg: 10 }, pt: { xs: 4, md: 5 }, pb: { xs: "96px", sm: "40px", md: 5 }, maxWidth: 1400, mx: "auto", display: "flex", flexDirection: "column", gap: 3 }}>

        {/* ── Top row ── */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: { xs: 3, md: 0 } }}>

          <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "text.primary", fontWeight: 800, fontSize: 15, letterSpacing: 3, textTransform: "uppercase", flexShrink: 0 }}>
            Wagno Ink
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2.5, md: 4 }, flexWrap: "wrap" }}>
            {navLinks.map((link) => (
              <Typography key={link.to} component={Link} to={link.to} sx={{ textDecoration: "none", fontSize: typeScale.body, color: "text.secondary", letterSpacing: 0.3, transition: "color 0.2s ease", "&:hover": { color: "text.primary" } }}>
                {t(link.labelKey)}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Box key={s.label} component="a" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  sx={{ width: 38, height: 38, borderRadius: 2, border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "text.secondary", transition: "all 0.25s ease", "&:hover": { borderColor: `${s.color}60`, color: s.color, transform: "translateY(-2px)" } }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ height: "1px", bgcolor: "rgba(255,255,255,0.05)" }} />

        {/* ── Bottom row ── */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, justifyContent: "space-between", gap: { xs: 2, sm: 0 } }}>

          <Typography sx={{ fontSize: typeScale.caption, color: "text.secondary" }}>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "space-between", sm: "flex-end" }, gap: 2 }}>
            <Typography sx={{ fontSize: typeScale.caption, color: "text.secondary" }}>
              {t("footer.builtBy")}{" "}
              <Box component="a" href="https://www.linkedin.com/in/fatima-alves-azevedodo-271ab1212" target="_blank" rel="noopener noreferrer"
                sx={{ color: "accent.main", textDecoration: "none", fontWeight: 600, transition: "color 0.2s ease", "&:hover": { color: "primary.main" } }}
              >
                Fátima Azevedo
              </Box>
            </Typography>

            <Box component="button" onClick={scrollToTop} aria-label="Scroll to top"
              sx={{ width: 32, height: 36, borderRadius: 2, border: `1px solid ${alpha(theme.palette.accent.main, 0.2)}`, background: "none", color: "text.secondary", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s ease", "&:hover": { borderColor: alpha(theme.palette.primary.main, 0.5), color: "primary.main", transform: "translateY(-2px)" } }}
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
