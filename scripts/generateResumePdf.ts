import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 Page: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Dark slate text with subtle tech blue accents
  const primaryColor = rgb(0.05, 0.1, 0.2); // Near black / deep navy
  const accentColor = rgb(0.12, 0.38, 0.88); // Electric / Royal Blue
  const secondaryColor = rgb(0.3, 0.35, 0.42); // Slate gray
  const lineRuleColor = rgb(0.85, 0.88, 0.92); // Light hairline border

  let y = height - 50;

  // Header: Name
  page.drawText('RITHESH KUMAR NYAMATHABAD', {
    x: 50,
    y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  y -= 20;

  // Subtitle / Title
  page.drawText('Software Developer | B.Tech Computer Science Engineering (AI/ML)', {
    x: 50,
    y,
    size: 11,
    font: fontBold,
    color: accentColor,
  });

  y -= 16;

  // Contact Info Row
  const contactText = 'Gujarat, India  |  nyamathabadrithesh18@gmail.com  |  github.com/nyamathabadrithesh18  |  linkedin.com/in/rithesh-kumar-nyamathabad';
  page.drawText(contactText, {
    x: 50,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 12;

  // Divider Line
  page.drawLine({
    start: { x: 50, y },
    end: { x: width - 50, y },
    thickness: 1,
    color: lineRuleColor,
  });

  y -= 22;

  // SECTION HELPER
  function drawSectionHeader(title: string) {
    page.drawText(title.toUpperCase(), {
      x: 50,
      y,
      size: 10,
      font: fontBold,
      color: accentColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: 50, y },
      end: { x: width - 50, y },
      thickness: 0.75,
      color: lineRuleColor,
    });
    y -= 14;
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader('Professional Summary');
  const summaryLines = [
    'Enthusiastic Software Developer and Computer Science Engineering student specializing in Artificial Intelligence and',
    'Machine Learning at Marwadi University. Solid foundation in object-oriented programming, data structures, algorithms,',
    'and modern web development. Experienced in building responsive full-stack applications, interactive systems, and practical',
    'AI-driven prototypes. Committed to clean code craftsmanship, collaborative problem-solving, and continuous learning.',
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: 50, y, size: 9, font: fontRegular, color: primaryColor });
    y -= 12;
  }

  y -= 8;

  // 2. EDUCATION
  drawSectionHeader('Education');
  page.drawText('Marwadi University', { x: 50, y, size: 10, font: fontBold, color: primaryColor });
  page.drawText('Gujarat, India | Expected 2026', { x: width - 190, y, size: 9, font: fontRegular, color: secondaryColor });
  y -= 13;
  page.drawText('Bachelor of Technology (B.Tech) — Computer Science and Engineering', { x: 50, y, size: 9, font: fontRegular, color: primaryColor });
  y -= 12;
  page.drawText('Specialization: Artificial Intelligence & Machine Learning', { x: 50, y, size: 8.5, font: fontOblique, color: secondaryColor });

  y -= 18;

  // 3. TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Languages:', value: 'Python, C++, C, JavaScript (ES6+), SQL, Java (Basics)' },
    { label: 'Web Technologies:', value: 'React, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design, REST APIs' },
    { label: 'AI & Data Science:', value: 'Machine Learning Fundamentals, Generative AI APIs, Prompt Engineering, DSA' },
    { label: 'Developer Tools:', value: 'Git, GitHub, VS Code, Google AI Studio, Vite, Linux Shell Environments' },
    { label: 'Core Competencies:', value: 'Problem Solving, System Architecture, Object-Oriented Design, Algorithm Optimization' },
  ];

  for (const sk of skills) {
    page.drawText(sk.label, { x: 50, y, size: 9, font: fontBold, color: primaryColor });
    page.drawText(sk.value, { x: 155, y, size: 9, font: fontRegular, color: primaryColor });
    y -= 13;
  }

  y -= 8;

  // 4. FEATURED PROJECTS
  drawSectionHeader('Projects & Software Builds');

  const projects = [
    {
      title: 'Ezy Bakery — E-Commerce Web Experience',
      stack: 'React, JavaScript, Tailwind CSS, Vite',
      bullets: [
        'Engineered a modern web storefront for neighborhood artisanal bakery ordering with dynamic catalog filtering.',
        'Implemented real-time basket calculations, dietary classification indicators, and custom celebration cake notes.',
        'Created a seamless mobile-first responsive layout with sub-second page transitions.',
      ],
    },
    {
      title: 'Campus Pulse AI — Academic Assistant & Dashboard',
      stack: 'React, Python, Tailwind CSS, AI APIs',
      bullets: [
        'Built an intelligent campus productivity dashboard consolidating student schedules, deadlines, and study modules.',
        'Integrated an AI study companion capable of contextual topic breakdowns and structured revision question generation.',
        'Designed high-contrast dark dashboard interface optimized for late-night university study sessions.',
      ],
    },
    {
      title: 'Hangman Interactive — Algorithmic Word Deduction Game',
      stack: 'Python, React Web Port, Algorithms',
      bullets: [
        'Developed a logic-driven interactive word deduction application with multi-difficulty tiers and hint algorithms.',
        'Built dynamic SVG gallows rendering responsive to mistake limits and strict input sanitization preventing duplicate guesses.',
        'Demonstrated state machine architecture, string manipulation, and algorithmic efficiency.',
      ],
    },
    {
      title: 'Stock Portfolio Tracker — Financial Software Utility',
      stack: 'React, JavaScript, CSS Grid, Financial Math',
      bullets: [
        'Created an investment portfolio analytics dashboard tracking equity weightings, asset allocations, and return metrics.',
        'Implemented automated profit/loss formulas, multi-currency support, and dynamic visualization widgets.',
      ],
    },
  ];

  for (const p of projects) {
    page.drawText(p.title, { x: 50, y, size: 9.5, font: fontBold, color: primaryColor });
    page.drawText(p.stack, { x: width - 210, y, size: 8, font: fontOblique, color: accentColor });
    y -= 12;

    for (const b of p.bullets) {
      page.drawText('•', { x: 56, y, size: 8, font: fontBold, color: accentColor });
      page.drawText(b, { x: 66, y, size: 8.5, font: fontRegular, color: primaryColor });
      y -= 11;
    }
    y -= 4;
  }

  y -= 4;

  // 5. ACTIVITIES & CERTIFICATIONS
  drawSectionHeader('Certifications & Continuous Learning');
  const certs = [
    'Python & Computational Algorithms Certification — Focus on memory complexity and DSA (In Progress)',
    'Modern Web Development Architecture Bootcamp — Component lifecycle, responsive UI & state patterns',
    'Marwadi University Coding Challenges & Hackathons — Active competitive coding and team collaboration',
    'Open Source & Community Contributor — Regular commits on GitHub (@nyamathabadrithesh18)',
  ];

  for (const c of certs) {
    page.drawText('•', { x: 56, y, size: 8, font: fontBold, color: accentColor });
    page.drawText(c, { x: 66, y, size: 8.5, font: fontRegular, color: primaryColor });
    y -= 11;
  }

  // Footer / Verification watermark
  const footerText = 'Official Developer Resume — Rithesh Kumar Nyamathabad  |  Generated for portfolio verification';
  page.drawText(footerText, {
    x: 50,
    y: 24,
    size: 7.5,
    font: fontRegular,
    color: secondaryColor,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(process.cwd(), 'public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath, 'Size:', pdfBytes.length, 'bytes');
}

generateResume().catch((err) => {
  console.error('Error generating resume:', err);
  process.exit(1);
});
