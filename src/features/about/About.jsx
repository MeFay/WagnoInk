import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/UI/Button";
import {
  SECTIONS,
  workExperience,
  training,
  contests,
  prizeImages,
  socialLinks as socialData,
} from "./about.data";

const MotionBox = motion(Box);

// Icons are React components — they can't be stored in a plain .js data file.
// So I keep the data file clean and inject the icon components here by matching on the label name.
const ICON_MAP = {
  Instagram: InstagramIcon,
  WhatsApp: WhatsAppIcon,
  Email: EmailIcon,
};
const socialLinks = socialData.map((s) => ({ ...s, icon: ICON_MAP[s.label] }));

const SECTION_LABEL_KEYS = {
  "introduction": "about.sectionIntroduction",
  "work-experience": "about.sectionWorkExperience",
  "training": "about.sectionTraining",
  "contests": "about.sectionContests",
};

// SidebarNav highlights whichever section is currently visible on screen.
// It receives activeSection as a prop and the parent updates it via IntersectionObserver.
const SidebarNav = ({ activeSection }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 1,
        position: "sticky",
        top: 120,
        alignSelf: "flex-start",
        minWidth: 180,
      }}
    >
      {SECTIONS.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <Box
            key={s.id}
            component="a"
            href={`#${s.id}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textDecoration: "none",
              color: isActive ? "white" : "text.disabled",
              fontSize: 13,
              fontWeight: isActive ? 600 : 400,
              letterSpacing: 0.5,
              transition: "all 0.25s ease",
              py: 0.5,
              "&:hover": { color: "text.secondary" },
            }}
          >
            <Box
              sx={{
                width: isActive ? 28 : 12,
                height: "1.5px",
                bgcolor: isActive
                  ? theme.palette.accent.main
                  : "rgba(255,255,255,0.18)",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
            />
            {t(SECTION_LABEL_KEYS[s.id] ?? s.id)}
          </Box>
        );
      })}
    </Box>
  );
};

const TrackedSection = ({ id, children }) => (
  <Box
    id={id}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 5,
      scrollMarginTop: "120px",
    }}
  >
    {children}
  </Box>
);

const SectionLabel = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Box
        sx={{
          width: 32,
          height: "1.5px",
          bgcolor: theme.palette.accent.main,
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 4,
          color: theme.palette.accent.main,
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

const Divider = () => (
  <Box
    sx={{ width: "100%", height: "1px", bgcolor: "rgba(255,255,255,0.05)" }}
  />
);

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const AMBER = theme.palette.accent.main;
  const RED = theme.palette.primary.main;
  const [activeSection, setActiveSection] = useState("introduction");

  // IntersectionObserver fires a callback whenever a section enters or leaves the viewport.
  // I use rootMargin to shrink the detection zone so a section is only "active" when
  // it's clearly visible in the middle of the screen, not just barely peeking in.
  // The cleanup function (return) disconnects all observers when the component unmounts.
  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <Box
      id="page-about"
      sx={{
        minHeight: "100vh",
        pt: { xs: "88px", md: "96px" },
        pb: { xs: 6, md: 8 },
        px: { xs: 3, sm: 5, md: 8, lg: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          gap: { lg: 14 },
          alignItems: "flex-start",
          pt: { xs: 6, md: 8 },
        }}
      >
        <SidebarNav activeSection={activeSection} />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 7,
            minWidth: 0,
          }}
        >
          <TrackedSection id="introduction">
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              sx={{ display: "flex", flexDirection: "column", gap: 5 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 4, sm: 6 },
                  alignItems: { sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 160, sm: 200 },
                      height: { xs: 160, sm: 200 },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: -8,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(198,40,40,0.2) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                    <Box
                      role="img"
                      aria-label="Wagno — tattoo artist"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundImage: "url(/artist-images/About/Wagno.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        bgcolor: "rgba(26,26,26,0.8)",
                        border: "2px solid rgba(255,255,255,0.1)",
                        boxShadow:
                          "0 0 0 4px rgba(198,40,40,0.15), 0 20px 60px rgba(0,0,0,0.6)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        bgcolor: AMBER,
                        zIndex: 2,
                      }}
                    />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOnIcon
                      sx={{ fontSize: 12, color: "text.secondary" }}
                    />
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "text.secondary",
                        letterSpacing: 0.5,
                      }}
                    >
                      Porto, Portugal
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    pt: { sm: 0.5 },
                  }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: "3rem", sm: "3.5rem", md: "4.5rem" },
                        fontWeight: 900,
                        letterSpacing: -1,
                        lineHeight: 1,
                      }}
                    >
                      Wagno
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", md: "1.15rem" },
                        color: "text.secondary",
                        fontWeight: 400,
                        letterSpacing: 0.3,
                      }}
                    >
                      {t("about.subtitle")}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                    {socialLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <CustomButton
                          key={s.label}
                          variant="secondary"
                          size="small"
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            "& svg": {
                              color: AMBER,
                              transition: "color 0.22s ease",
                            },
                            "&:hover": {
                              borderColor: `${s.hoverColor}60`,
                              background: `${s.hoverColor}12`,
                              color: s.hoverColor,
                              "& svg": { color: s.hoverColor },
                            },
                          }}
                        >
                          <Icon sx={{ fontSize: 15 }} />
                          {s.label}
                        </CustomButton>
                      );
                    })}
                  </Box>
                </Box>
              </Box>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    color: "text.secondary",
                    lineHeight: 1.95,
                  }}
                >
                  {t("about.bio")}
                </Typography>
              </MotionBox>
            </MotionBox>
          </TrackedSection>

          <Divider />

          <TrackedSection id="work-experience">
            <SectionLabel>{t("about.workExperienceLabel")}</SectionLabel>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Vertical line running through all timeline entries */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 6, sm: 7 },
                  top: 12,
                  bottom: 12,
                  width: "1.5px",
                  bgcolor: "rgba(255,255,255,0.08)",
                  zIndex: 0,
                }}
              />

              {workExperience.map((job, i) => {
                const role       = t(`aboutContent.workExperience.${i}.role`,       { defaultValue: job.role });
                const highlights = t(`aboutContent.workExperience.${i}.highlights`, { returnObjects: true, defaultValue: job.highlights });
                return (
                <MotionBox
                  key={job.studio}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    display: "flex",
                    gap: { xs: 4, sm: 5 },
                    pb: i < workExperience.length - 1 ? { xs: 4, md: 6 } : 0,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {/* Amber glow for the current job, plain white outline for past ones */}
                    <Box
                      sx={{
                        width: { xs: 13, sm: 15 },
                        height: { xs: 13, sm: 15 },
                        borderRadius: "50%",
                        mt: "3px",
                        flexShrink: 0,
                        border: job.current
                          ? `2px solid ${AMBER}`
                          : "1.5px solid rgba(255,255,255,0.25)",
                        bgcolor: job.current
                          ? alpha(AMBER, 0.12)
                          : "transparent",
                        boxShadow: job.current
                          ? `0 0 8px ${alpha(AMBER, 0.38)}`
                          : "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: job.current ? AMBER : "text.disabled",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        {job.period}
                      </Typography>
                      {job.current && (
                        <Box
                          sx={{
                            px: 1.2,
                            py: 0.2,
                            borderRadius: 999,
                            bgcolor: alpha(AMBER, 0.08),
                            border: `1px solid ${alpha(AMBER, 0.31)}`,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: AMBER,
                              letterSpacing: 1,
                              textTransform: "uppercase",
                            }}
                          >
                            {t("about.current")}
                          </Typography>
                        </Box>
                      )}
                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "text.disabled",
                          letterSpacing: 0.3,
                        }}
                      >
                        · {job.location}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                          color: "white",
                          letterSpacing: 0.2,
                          lineHeight: 1.2,
                        }}
                      >
                        {job.studio}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: RED,
                          fontWeight: 600,
                          letterSpacing: 0.3,
                        }}
                      >
                        {role}
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      {highlights.map((h) => (
                        <Box
                          key={h}
                          sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "flex-start",
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              bgcolor: alpha(AMBER, 0.38),
                              flexShrink: 0,
                              mt: "9px",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: "text.secondary",
                              lineHeight: 1.8,
                            }}
                          >
                            {h}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </MotionBox>
                );
              })}
            </Box>
          </TrackedSection>

          <Divider />

          <TrackedSection id="training">
            <SectionLabel>{t("about.trainingLabel")}</SectionLabel>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 6, sm: 7 },
                  top: 12,
                  bottom: 12,
                  width: "1.5px",
                  bgcolor: "rgba(255,255,255,0.08)",
                  zIndex: 0,
                }}
              />

              {training.map((item, i) => {
                const focus       = t(`aboutContent.training.${i}.focus`,       { defaultValue: item.focus });
                const description = t(`aboutContent.training.${i}.description`, { defaultValue: item.description });
                return (
                <MotionBox
                  key={item.mentor}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  sx={{
                    display: "flex",
                    gap: { xs: 4, sm: 5 },
                    pb: i < training.length - 1 ? { xs: 4, md: 5 } : 0,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 13, sm: 15 },
                        height: { xs: 13, sm: 15 },
                        borderRadius: "50%",
                        mt: "3px",
                        flexShrink: 0,
                        border: "1.5px solid rgba(255,255,255,0.25)",
                        bgcolor: "transparent",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 12,
                          color: "text.disabled",
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        {item.period}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "text.disabled" }}>
                        · {item.location}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          color: "white",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.mentor}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 13, color: RED, fontWeight: 600 }}
                      >
                        {focus}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </MotionBox>
                );
              })}
            </Box>
          </TrackedSection>

          <Divider />

          <TrackedSection id="contests">
            <SectionLabel>{t("about.contestsLabel")}</SectionLabel>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contests.map((c, i) => {
                const contestEvent  = t(`aboutContent.contests.${i}.event`,  { defaultValue: c.event });
                const contestResult = t(`aboutContent.contests.${i}.result`, { defaultValue: c.result });
                const isGold = c.place === 1;
                const isBronze = c.place === 3;
                const medalColor = isGold
                  ? AMBER
                  : isBronze
                    ? "#cd7f32"
                    : "rgba(255,255,255,0.4)";
                const medalBg = isGold
                  ? alpha(AMBER, 0.09)
                  : isBronze
                    ? "rgba(205,127,50,0.12)"
                    : "rgba(255,255,255,0.05)";
                const medalBorder = isGold
                  ? alpha(AMBER, 0.31)
                  : isBronze
                    ? "rgba(205,127,50,0.35)"
                    : "rgba(255,255,255,0.12)";
                const medal = isGold ? "🥇" : isBronze ? "🥉" : "·";
                return (
                  <MotionBox
                    key={`${c.name}-${c.year}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 3,
                      py: 2,
                      px: 3,
                      borderRadius: 2,
                      border: `1px solid ${medalBorder}`,
                      background: medalBg,
                      transition: "all 0.3s ease",
                      "&:hover": { transform: "translateX(4px)" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}
                      >
                        {medal}
                      </Typography>
                      <Box
                        sx={{
                          minWidth: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 14,
                            color: "white",
                            fontWeight: 700,
                            lineHeight: 1.3,
                          }}
                        >
                          {c.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 12, color: "text.disabled" }}
                        >
                          {contestEvent}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        flexShrink: 0,
                        gap: 0.3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 13,
                          color: medalColor,
                          fontWeight: 800,
                          letterSpacing: 0.3,
                        }}
                      >
                        {contestResult}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "text.disabled" }}>
                        {c.year}
                      </Typography>
                    </Box>
                  </MotionBox>
                );
              })}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 3,
                  color: "text.disabled",
                  textTransform: "uppercase",
                }}
              >
                {t("about.prizeImagesLabel")}
              </Typography>

              {/* Asymmetric grid: 1 large image on the left spanning 2 rows, 2 smaller ones stacked on the right */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1.6fr 1fr" },
                  gridTemplateRows: { sm: "1fr 1fr" },
                  gap: 2,
                  height: { sm: 480 },
                  isolation: "isolate",
                }}
              >
                <MotionBox
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  sx={{
                    gridRow: { sm: "1 / 3" },
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    transform: "translateZ(0)",
                    boxShadow: "inset 0 0 0 1px #0a0a0a",
                    height: { xs: 280, sm: "100%" },
                    backgroundImage: `url(${prizeImages[0].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    bgcolor: "rgba(26,26,26,0.6)",
                    cursor: "default",
                    transition: "transform 0.5s ease",
                    "&:hover": { transform: "scale(1.01)" },
                    "&:hover .prize-label": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 35%, transparent 65%)",
                      pointerEvents: "none",
                    }}
                  />
                  <Box
                    className="prize-label"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      opacity: { xs: 1, md: 0 },
                      transform: { xs: "none", md: "translateY(8px)" },
                      transition: "all 0.35s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 11,
                        color: AMBER,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {t("aboutContent.prizeImages.0.result", { defaultValue: prizeImages[0].result })}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 800, color: "white" }}
                    >
                      {prizeImages[0].award}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "text.disabled" }}>
                      {prizeImages[0].year}
                    </Typography>
                  </Box>
                </MotionBox>

                {prizeImages.slice(1).map((img, i) => {
                  const prizeResult = t(`aboutContent.prizeImages.${i + 1}.result`, { defaultValue: img.result });
                  return (
                  <MotionBox
                    key={img.src}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    viewport={{ once: true }}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      position: "relative",
                      transform: "translateZ(0)",
                      boxShadow: "inset 0 0 0 1px #0a0a0a",
                      height: { xs: 200, sm: "100%" },
                      backgroundImage: `url(${img.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      bgcolor: "rgba(26,26,26,0.6)",
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.02)" },
                      "&:hover .prize-label": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 35%, transparent 65%)",
                        pointerEvents: "none",
                      }}
                    />
                    <Box
                      className="prize-label"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        opacity: { xs: 1, md: 0 },
                        transform: { xs: "none", md: "translateY(8px)" },
                        transition: "all 0.35s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          color: AMBER,
                          fontWeight: 700,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                        }}
                      >
                        {prizeResult}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14, fontWeight: 800, color: "white" }}
                      >
                        {img.award}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "text.disabled" }}>
                        {img.year}
                      </Typography>
                    </Box>
                  </MotionBox>
                  );
                })}
              </Box>
            </Box>
          </TrackedSection>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
