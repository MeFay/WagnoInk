import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import PaletteIcon from "@mui/icons-material/Palette";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HealingIcon from "@mui/icons-material/Healing";
import { useTranslation } from "react-i18next";
import ContactSection from "../home/ContactForm";
import { typeScale } from "../../styles/theme";

const MotionBox = motion(Box);

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

// ── Static location data (addresses & URLs don't need translation) ─────
const LOCATION_DATA = [
  {
    city: "Rio Tinto, Porto",
    countryKey: "info.portugal",
    address: "Rua de Santa Catarina, Porto",
    mapsUrl: "#",
    hours: "Mon - Sat 9:30–20:00",
    main: true,
  },
  {
    city: "Cambados, Galiza",
    countryKey: "info.spain",
    address: "Rúa a Mariña, 2, 36630 Cambados, Pontevedra",
    mapsUrl: "https://maps.app.goo.gl/2TxD6tYg481juCXT7",
    guestSpot: true,
    main: false,
  },
  {
    city: "Cangas, Galiza",
    countryKey: "info.spain",
    address: "Av. de Bueu, 30, Bajo 1, 36940 Cangas, Pontevedra",
    mapsUrl: "https://maps.app.goo.gl/8qHTpTcCdaCXtrFj7",
    guestSpot: true,
    main: false,
  },
];

const STEP_ICONS = [ChatIcon, PaletteIcon, PaymentsIcon, EventAvailableIcon, HealingIcon];

// ── Sub-components ────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <Typography
    sx={{
      fontSize: typeScale.label,
      fontWeight: 700,
      letterSpacing: 4,
      color: "accent.main",
      textTransform: "uppercase",
    }}
  >
    {children}
  </Typography>
);

const Card = ({ children, sx = {} }) => (
  <Box
    sx={{
      p: { xs: 4, md: 5 },
      borderRadius: 3,
      background: "rgba(26,26,26,0.6)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.06)",
      ...sx,
    }}
  >
    {children}
  </Box>
);

// ── Header decoration — floating rings ────────────────────────────────

const HeaderDecoration = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { md: 340, lg: 380 },
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer slow-rotating ring */}
      <MotionBox
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: `1px solid ${alpha(theme.palette.accent.main, 0.18)}`,
        }}
      />

      {/* Middle counter-rotating ring */}
      <MotionBox
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          width: 210,
          height: 210,
          borderRadius: "50%",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
        }}
      />

      {/* Inner pulsing ring */}
      <MotionBox
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: 130,
          height: 130,
          borderRadius: "50%",
          border: `1px solid ${alpha(theme.palette.accent.main, 0.35)}`,
        }}
      />

      {/* Orbiting amber dot on outer ring */}
      <MotionBox
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "accent.main",
            boxShadow: `0 0 12px ${theme.palette.accent.main}`,
          }}
        />
      </MotionBox>

      {/* Orbiting red dot on middle ring */}
      <MotionBox
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          width: 210,
          height: 210,
          borderRadius: "50%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "primary.main",
            boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.8)}`,
          }}
        />
      </MotionBox>

      {/* Center glow */}
      <MotionBox
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.accent.main, 0.19)} 0%, transparent 70%)`,
        }}
      />

      {/* Center dot */}
      <Box
        sx={{
          position: "absolute",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.palette.accent.main} 0%, ${alpha(theme.palette.accent.main, 0.4)} 100%)`,
          boxShadow: `0 0 20px ${alpha(theme.palette.accent.main, 0.38)}`,
        }}
      />

      {/* Floating label */}
      <MotionBox
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 40,
          px: 2.5,
          py: 1,
          borderRadius: 2,
          background: "rgba(26,26,26,0.7)",
          backdropFilter: "blur(8px)",
          border: `1px solid ${alpha(theme.palette.accent.main, 0.19)}`,
        }}
      >
        <Typography
          sx={{
            fontSize: typeScale.label,
            fontWeight: 700,
            letterSpacing: 3,
            color: "accent.main",
            textTransform: "uppercase",
          }}
        >
          {t("info.floatingLabel")}
        </Typography>
      </MotionBox>
    </Box>
  );
};

// ── Page ─────────────────────────────────────────────────────────────

const Info = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const px = { xs: 3, sm: 5, md: 8, lg: 10 };
  const sectionGap = { xs: 6, md: 8 };

  // Build translated data inside component
  const BEFORE = t("info.before", { returnObjects: true });
  const AFTER = t("info.after", { returnObjects: true });

  return (
    <Box
      id="page-info"
      sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, px }}
    >
      {/* ── Header ──────────────────────────────────────────────────── */}
      <Box
        id="info-header"
        sx={{
          pt: { xs: 6, md: 8 },
          pb: sectionGap,
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: { md: 6 } }}>
          <MotionBox
            {...fade()}
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <SectionLabel>{t("info.label")}</SectionLabel>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 900,
                lineHeight: 1.05,
              }}
            >
              {t("info.title").split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: typeScale.body,
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              {t("info.description")}
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            sx={{ flex: 1, display: { xs: "none", md: "block" } }}
          >
            <HeaderDecoration />
          </MotionBox>
        </Box>
      </Box>

      {/* ── Locations ───────────────────────────────────────────────── */}
      <Box
        id="info-locations"
        sx={{ py: sectionGap, maxWidth: 1400, mx: "auto" }}
      >
        <MotionBox
          {...fade()}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            pb: { xs: 3, md: 4 },
          }}
        >
          <SectionLabel>{t("info.locationsLabel")}</SectionLabel>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900 }}
          >
            {t("info.locationsTitle")}
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {LOCATION_DATA.map((loc, i) => (
            <MotionBox key={loc.city} {...fade(i * 0.1)}>
              <Card
                sx={{
                  height: "100%",
                  position: "relative",
                  transition:
                    "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                  ...(loc.main && {
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  }),
                  "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, 0.5),
                    transform: "translateY(-3px)",
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                  },
                }}
              >
                {loc.main && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      px: 1.5,
                      py: 0.4,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.primary.main, 0.15),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: typeScale.label,
                        fontWeight: 700,
                        color: "primary.main",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {t("info.mainStudio")}
                    </Typography>
                  </Box>
                )}
                {loc.comingSoon && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      px: 1.5,
                      py: 0.4,
                      borderRadius: 999,
                      bgcolor: alpha(theme.palette.accent.main, 0.08),
                      border: `1px solid ${alpha(theme.palette.accent.main, 0.25)}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: typeScale.label,
                        fontWeight: 700,
                        color: "accent.main",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}
                    >
                      {t("info.comingSoon")}
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.4rem", md: "1.6rem" },
                        fontWeight: 900,
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {loc.city}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: typeScale.caption,
                        color: "text.secondary",
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {t(loc.countryKey)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: 16,
                        color: "accent.main",
                        mt: 0.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: typeScale.caption,
                        color: "text.secondary",
                        lineHeight: 1.5,
                      }}
                    >
                      {loc.address}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <AccessTimeIcon
                      sx={{
                        fontSize: 16,
                        color: "accent.main",
                        mt: 0.2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: typeScale.caption,
                        color: "text.secondary",
                        lineHeight: 1.5,
                      }}
                    >
                      {loc.guestSpot ? t("info.guestSpotHours") : loc.hours}
                    </Typography>
                  </Box>

                  {!loc.comingSoon && (
                    <Box
                      component="a"
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        fontSize: typeScale.caption,
                        fontWeight: 600,
                        color: "accent.main",
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {t("info.viewMaps")}
                    </Box>
                  )}
                </Box>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <Box
        id="info-how-it-works"
        sx={{ py: sectionGap, maxWidth: 1400, mx: "auto" }}
      >
        <MotionBox
          {...fade()}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            pb: { xs: 3, md: 4 },
          }}
        >
          <SectionLabel>{t("info.processLabel")}</SectionLabel>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900 }}
          >
            {t("info.processTitle")}
          </Typography>
        </MotionBox>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {STEP_ICONS.map((Icon, i) => {
            const stepNum = String(i + 1).padStart(2, "0");
            return (
              <MotionBox key={stepNum} {...fade(i * 0.08)}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 3,
                    alignItems: { sm: "flex-start" },
                    transition:
                      "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      borderColor: alpha(theme.palette.primary.main, 0.4),
                      transform: "translateY(-3px)",
                      boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        fontWeight: 900,
                        color: alpha(theme.palette.accent.main, 0.7),
                        lineHeight: 1,
                        minWidth: 48,
                      }}
                    >
                      {stepNum}
                    </Typography>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.07),
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon sx={{ fontSize: 20, color: "primary.main" }} />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "white",
                        fontSize: typeScale.body,
                      }}
                    >
                      {t(`info.steps.${i + 1}.title`)}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: typeScale.body,
                        lineHeight: 1.7,
                      }}
                    >
                      {t(`info.steps.${i + 1}.body`)}
                    </Typography>
                  </Box>
                </Card>
              </MotionBox>
            );
          })}
        </Box>
      </Box>

      {/* ── Payment ─────────────────────────────────────────────────── */}
      <Box
        id="info-payment"
        sx={{ py: sectionGap, maxWidth: 1400, mx: "auto" }}
      >
        <MotionBox
          {...fade()}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            pb: { xs: 3, md: 4 },
          }}
        >
          <SectionLabel>{t("info.paymentLabel")}</SectionLabel>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900 }}
          >
            {t("info.paymentTitle")}
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {[1, 2, 3].map((cardNum, i) => (
            <MotionBox key={cardNum} {...fade(i * 0.1)}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: alpha(theme.palette.primary.main, 0.7),
                    lineHeight: 1,
                  }}
                >
                  {String(cardNum).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "white",
                    fontSize: typeScale.body,
                  }}
                >
                  {t(`info.paymentCards.${cardNum}.title`)}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: typeScale.body,
                    lineHeight: 1.7,
                  }}
                >
                  {t(`info.paymentCards.${cardNum}.body`)}
                </Typography>
              </Card>
            </MotionBox>
          ))}
        </Box>
      </Box>

      {/* ── Before & After ──────────────────────────────────────────── */}
      <Box
        id="info-before-after"
        sx={{ py: sectionGap, maxWidth: 1400, mx: "auto" }}
      >
        <MotionBox
          {...fade()}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            pb: { xs: 3, md: 4 },
          }}
        >
          <SectionLabel>{t("info.beforeAfterLabel")}</SectionLabel>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 900 }}
          >
            {t("info.beforeAfterTitle")}
          </Typography>
        </MotionBox>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Before */}
          <MotionBox {...fade(0)}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: typeScale.body,
                }}
              >
                {t("info.beforeTitle")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {BEFORE.map((item) => (
                  <Box
                    key={item}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "accent.main",
                        mt: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: typeScale.body,
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </MotionBox>

          {/* After */}
          <MotionBox {...fade(0.1)}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "white",
                  fontSize: typeScale.body,
                }}
              >
                {t("info.afterTitle")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {AFTER.map((item) => (
                  <Box
                    key={item}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "accent.main",
                        mt: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: typeScale.body,
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </MotionBox>
        </Box>
      </Box>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <ContactSection
        id="info-contact"
        sx={{ px: 0 }}
        innerSx={{ gap: { xs: 3, md: 4 } }}
      />
    </Box>
  );
};

export default Info;
