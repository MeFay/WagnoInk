import { Box, Typography, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox
      component="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 4, md: 8 },
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Brand */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            WAGNO TATTOO
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Minimal. Precise. Timeless.
          </Typography>
        </Box>

        {/* Social Icons */}
        <Stack direction={{ xs: "column", md: "row" }}>
          {[
            {
              icon: <InstagramIcon />,
              link: "https://www.instagram.com/wagno.ink/",
            },
            {
              icon: <WhatsAppIcon />,
              link: "https://wa.me/351910848391",
            },
            {
              icon: <EmailIcon />,
              link: "mailto:Wagno.ink@icloud.com",
            },
          ].map((item, index) => (
            <IconButton
              key={index}
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.05)",
                  color: "secondary.main",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>
      </Stack>

      {/* Bottom Section */}
      <Box
        sx={{
          pt: 4,
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Wagno Ink. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.disabled",
          }}
        >
          Built and designed by{" "}
          <a
            href="www.linkedin.com/in/fatima-alves-azevedodo-271ab1212"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: 600,
              position: "relative",
              color: "inherit",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
            }}
          >
            Fátima Azevedo
          </a>
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default Footer;
