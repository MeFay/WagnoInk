import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomButton from "../../components/UI/Button";

const MotionBox = motion(Box);

const AMBER = "#c8923a";
const GREEN = "#25D366";
const PINK  = "#E4405F";

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/wagno.ink/", hoverColor: PINK  },
  { icon: WhatsAppIcon,  label: "WhatsApp",  href: "https://wa.me/351910848391",           hoverColor: GREEN },
  { icon: EmailIcon,     label: "Email",     href: "mailto:Wagno.ink@icloud.com",           hoverColor: AMBER },
];

const workExperience = [
  {
    studio: "Independent / Wagno Ink",
    role: "Tattoo Artist & Studio Owner",
    period: "2016 – Present",
    location: "Porto, Portugal",
    highlights: [
      "Built a private studio with a fully custom-only policy — no flash, no templates.",
      "Specialised in realism, blackwork, and illustrative styles.",
      "Grew a client base across Portugal, Spain, and the UK entirely through word of mouth and Instagram.",
    ],
  },
  {
    studio: "Tattoo Studio Name",
    role: "Guest Artist",
    period: "2014 – 2016",
    location: "Porto, Portugal",
    highlights: [
      "Completed apprenticeship under senior artists, mastering line work and shading techniques.",
      "Developed signature approach to custom portrait tattoos.",
    ],
  },
];

const studies = [
  {
    institution: "Fine Arts School",
    degree: "Drawing & Visual Arts",
    period: "2010 – 2014",
    location: "Porto, Portugal",
  },
];

const contests = [
  { name: "Best Realism — Porto Tattoo Convention",    year: "2023", result: "1st Place" },
  { name: "Best Black & Grey — Lisboa Tattoo Expo",    year: "2022", result: "2nd Place" },
  { name: "Best Overall — Porto Tattoo Convention",    year: "2021", result: "Nominated" },
];

const SECTIONS = [
  { id: "introduction",    label: "Introduction"    },
  { id: "work-experience", label: "Work Experience" },
  { id: "studies",         label: "Studies"         },
  { id: "contests",        label: "Contests"        },
];

// ── Sidebar ──────────────────────────────────────────────────────────
const SidebarNav = ({ activeSection }) => (
  <Box sx={{ display: { xs: "none", lg: "flex" }, flexDirection: "column", gap: 1, position: "sticky", top: 120, alignSelf: "flex-start", minWidth: 180 }}>
    {SECTIONS.map((s) => {
      const isActive = activeSection === s.id;
      return (
        <Box key={s.id} component="a" href={`#${s.id}`}
          sx={{ display: "flex", alignItems: "center", gap: 2, textDecoration: "none", color: isActive ? "white" : "rgba(255,255,255,0.28)", fontSize: 13, fontWeight: isActive ? 600 : 400, letterSpacing: 0.5, transition: "all 0.25s ease", py: 0.5, "&:hover": { color: "rgba(255,255,255,0.65)" } }}
        >
          <Box sx={{ width: isActive ? 28 : 12, height: "1.5px", bgcolor: isActive ? "primary.main" : "rgba(255,255,255,0.18)", transition: "all 0.3s ease", flexShrink: 0 }} />
          {s.label}
        </Box>
      );
    })}
  </Box>
);

const TrackedSection = ({ id, children }) => (
  <Box id={id} sx={{ display: "flex", flexDirection: "column", gap: 5, scrollMarginTop: "120px" }}>
    {children}
  </Box>
);

// Section label — red line + red cap text (matches home sections)
const SectionLabel = ({ children }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
    <Box sx={{ width: 32, height: "1.5px", bgcolor: "primary.main", flexShrink: 0 }} />
    <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, color: "primary.main", textTransform: "uppercase" }}>
      {children}
    </Typography>
  </Box>
);

const Divider = () => (
  <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(255,255,255,0.05)" }} />
);

// ── Page ─────────────────────────────────────────────────────────────
const About = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: "88px", md: "96px" }, pb: { xs: 12, md: 16 }, px: { xs: 3, sm: 5, md: 8, lg: 10 } }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", display: "flex", gap: { lg: 14 }, alignItems: "flex-start" }}>

        <SidebarNav activeSection={activeSection} />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>

          {/* ── INTRODUCTION ─────────────────────────────────── */}
          <TrackedSection id="introduction">
            <MotionBox
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              sx={{ display: "flex", flexDirection: "column", gap: 5 }}
            >
              {/* ── Top row: circular photo + identity ── */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 4, sm: 6 }, alignItems: { sm: "flex-start" } }}>

                {/* Circular photo + location label underneath */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, flexShrink: 0 }}>
                  {/* Outer ring — decorative amber accent */}
                  <Box sx={{
                    position: "relative",
                    width: { xs: 160, sm: 200 },
                    height: { xs: 160, sm: 200 },
                  }}>
                    {/* Soft glow behind */}
                    <Box sx={{
                      position: "absolute",
                      inset: -8,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(198,40,40,0.2) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }} />
                    {/* Photo */}
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundImage: "url(/artist-images/Wagno.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        bgcolor: "rgba(26,26,26,0.8)",
                        border: "2px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 0 0 4px rgba(198,40,40,0.15), 0 20px 60px rgba(0,0,0,0.6)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                    {/* Small amber dot accent */}
                    <Box sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: AMBER,
                      border: "2px solid #0a0a0a",
                      zIndex: 2,
                    }} />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }} />
                    <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 0.5 }}>
                      Porto, Portugal
                    </Typography>
                  </Box>
                </Box>

                {/* Identity: name, title, socials */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pt: { sm: 0.5 } }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography variant="h1" sx={{ fontSize: { xs: "3rem", sm: "3.5rem", md: "4.5rem" }, fontWeight: 900, letterSpacing: -1, lineHeight: 1 }}>
                      Wagno
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, color: "rgba(255,255,255,0.55)", fontWeight: 400, letterSpacing: 0.3 }}>
                      Tattoo Artist · Est. 2016
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
                          target="_blank" rel="noopener noreferrer"
                          sx={{
                            "& svg": { color: AMBER, transition: "color 0.22s ease" },
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

              {/* ── Bio — full width below ── */}
              <MotionBox
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography sx={{ fontSize: { xs: "0.95rem", md: "1.05rem" }, color: "rgba(255,255,255,0.62)", lineHeight: 1.95 }}>
                  Wagno is a Porto-based tattoo artist with over 8 years of experience working exclusively with custom
                  designs. Every piece starts as a blank page — drawn from scratch to fit the person, the placement, and the idea.
                  No flash, no templates, no compromises. His work spans realism, blackwork, and illustrative styles,
                  with a particular focus on portraits and nature-inspired compositions. He has exhibited at tattoo
                  conventions across Portugal and Spain, taking home multiple awards for realism and black & grey.
                </Typography>
              </MotionBox>
            </MotionBox>
          </TrackedSection>

          <Divider />

          {/* ── WORK EXPERIENCE ──────────────────────────────── */}
          <TrackedSection id="work-experience">
            <SectionLabel>Work Experience</SectionLabel>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {workExperience.map((job, i) => (
                <MotionBox
                  key={job.studio}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  {/* Header row */}
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { sm: "flex-end" }, gap: 1 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                      <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.2rem" }, color: "white", letterSpacing: 0.2 }}>
                        {job.studio}
                      </Typography>
                      <Typography sx={{ fontSize: 14, color: AMBER, fontWeight: 600, letterSpacing: 0.3 }}>
                        {job.role}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { sm: "right" }, flexShrink: 0, pb: { sm: 0.3 } }}>
                      <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                        {job.period}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.28)", mt: 0.2, letterSpacing: 0.5 }}>
                        {job.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Highlights */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {job.highlights.map((h) => (
                      <Box key={h} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                        <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: `${AMBER}70`, flexShrink: 0, mt: "8px" }} />
                        <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
                          {h}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Bottom rule */}
                  {i < workExperience.length - 1 && (
                    <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(255,255,255,0.04)", mt: 1 }} />
                  )}
                </MotionBox>
              ))}
            </Box>
          </TrackedSection>

          <Divider />

          {/* ── STUDIES ──────────────────────────────────────── */}
          <TrackedSection id="studies">
            <SectionLabel>Studies</SectionLabel>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {studies.map((s, i) => (
                <MotionBox
                  key={s.institution}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                  sx={{
                    display: "flex", flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between", alignItems: { sm: "center" },
                    gap: 2, p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(10px)",
                    transition: "border-color 0.3s ease",
                    "&:hover": { borderColor: `${AMBER}30` },
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>
                      {s.institution}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: AMBER, fontWeight: 500 }}>
                      {s.degree}
                    </Typography>
                    <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.28)", mt: 0.2, letterSpacing: 0.3 }}>
                      {s.location}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 500, flexShrink: 0 }}>
                    {s.period}
                  </Typography>
                </MotionBox>
              ))}
            </Box>
          </TrackedSection>

          <Divider />

          {/* ── CONTESTS ─────────────────────────────────────── */}
          <TrackedSection id="contests">
            <SectionLabel>Contests & Awards</SectionLabel>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {contests.map((c, i) => {
                const dotColor = c.result === "1st Place" ? "#c62828" : c.result === "2nd Place" ? AMBER : "rgba(255,255,255,0.25)";
                const resultColor = c.result === "1st Place" ? "#c62828" : c.result === "2nd Place" ? AMBER : "rgba(255,255,255,0.4)";
                return (
                  <MotionBox
                    key={c.name}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                    sx={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 3, py: 2.5, px: 3, borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(255,255,255,0.02)",
                      transition: "border-color 0.3s ease, background 0.3s ease",
                      "&:hover": { borderColor: `${AMBER}25`, background: `${AMBER}06` },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, minWidth: 0 }}>
                      <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: dotColor, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.82)", fontWeight: 500, lineHeight: 1.4 }}>
                        {c.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                      <Typography sx={{ fontSize: 13, color: resultColor, fontWeight: 700 }}>
                        {c.result}
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.28)" }}>
                        {c.year}
                      </Typography>
                    </Box>
                  </MotionBox>
                );
              })}
            </Box>

            {/* Prize photos */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2, mt: 2 }}>
              {[1, 2, 3].map((n, i) => (
                <MotionBox
                  key={n}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                  sx={{
                    aspectRatio: "4/3", borderRadius: 3, overflow: "hidden",
                    position: "relative",
                    border: `1px solid rgba(255,255,255,0.07)`,
                    backgroundImage: `url(/artist-images/prize-${n}.jpg)`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    bgcolor: "rgba(26,26,26,0.6)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": { transform: "scale(1.02)", boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${AMBER}35` },
                  }}
                >
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)", pointerEvents: "none" }} />
                </MotionBox>
              ))}
            </Box>
          </TrackedSection>

        </Box>
      </Box>
    </Box>
  );
};

export default About;