/**
 * CYBERPUNK COCKPIT 3D DEVELOPER PORTFOLIO ENGINE
 * With Multi-Shard Split Image Assembly & Blast Door Preloader
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==============================================================
  // 1. FUTURISTIC WEB AUDIO SYNTHESIZER
  // ==============================================================
  let audioCtx = null;
  let sfxEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playCyberTone(type = 'hover') {
    if (!sfxEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      const now = audioCtx.currentTime;

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1400, now + 0.04);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'tick') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        osc.start(now);
        osc.stop(now + 0.025);
      } else if (type === 'lock') {
        // High-tech mechanical split lock
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(850, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'scan') {
        // High-speed Laser Barcode Beep
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(2200, now + 0.07);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {}
  }

  const sfxBtn = document.getElementById('sfx-btn');
  const sfxStatus = document.getElementById('sfx-status');
  const sfxIcon = document.getElementById('sfx-icon');

  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      initAudio();
      sfxEnabled = !sfxEnabled;
      if (sfxStatus) sfxStatus.textContent = sfxEnabled ? 'ON' : 'OFF';
      if (sfxIcon) {
        sfxIcon.setAttribute('data-lucide', sfxEnabled ? 'volume-2' : 'volume-x');
        if (window.lucide) window.lucide.createIcons();
      }
      playCyberTone('click');
    });
  }

  // ==============================================================
  // 2. MULTI-SHARD SPLIT ASSEMBLY ENGINE
  // ==============================================================
  const splitAssembly = document.getElementById('split-assembly');
  const btnReplaySplit = document.getElementById('btn-replay-split');

  // Start in displaced / split state
  if (splitAssembly) {
    splitAssembly.classList.add('displaced');
  }

  function assemblePortrait() {
    if (!splitAssembly) return;
    playCyberTone('lock');
    splitAssembly.classList.remove('displaced');
    splitAssembly.classList.add('assembled');
  }

  function triggerSplitReplay() {
    if (!splitAssembly) return;
    playCyberTone('click');
    splitAssembly.classList.remove('assembled');
    splitAssembly.classList.add('displaced');

    setTimeout(() => {
      assemblePortrait();
    }, 450);
  }

  if (btnReplaySplit) {
    btnReplaySplit.addEventListener('click', triggerSplitReplay);
  }

  // ==============================================================
  // 3. PRELOADER & BLAST DOOR REVEAL (0 -> 100%)
  // ==============================================================
  const preloader = document.getElementById('preloader');
  const loadNum = document.getElementById('load-num');
  let currentLoad = 0;

  const preloaderInterval = setInterval(() => {
    currentLoad += Math.floor(Math.random() * 8) + 4;
    if (currentLoad > 100) currentLoad = 100;
    if (loadNum) loadNum.textContent = currentLoad;

    if (currentLoad >= 100) {
      clearInterval(preloaderInterval);
      setTimeout(() => {
        // Open blast doors
        if (preloader) preloader.classList.add('fade-out');
        playCyberTone('success');
        startOdometer();

        // Trigger the photo slices to converge and assemble!
        setTimeout(() => {
          assemblePortrait();
        }, 250);
      }, 400);
    }
  }, 35);

  // ==============================================================
  // 4. CYBER CURSOR ENGINE
  // ==============================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover triggers
  const interactives = document.querySelectorAll('a, button, input, textarea, .cylinder-card, .service-strip-row, .vertical-slab');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursorRing) {
        cursorRing.style.width = '52px';
        cursorRing.style.height = '52px';
        cursorRing.style.borderColor = 'rgba(255, 30, 66, 0.95)';
      }
      playCyberTone('hover');
    });
    el.addEventListener('mouseleave', () => {
      if (cursorRing) {
        cursorRing.style.width = '32px';
        cursorRing.style.height = '32px';
        cursorRing.style.borderColor = 'rgba(255, 30, 66, 0.6)';
      }
    });
    el.addEventListener('click', () => {
      playCyberTone('click');
    });
  });

  // ==============================================================
  // 5. VOLUMETRIC RED NEBULA & RISING EMBERS CANVAS
  // ==============================================================
  const canvas = document.getElementById('nebula-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const nebulaBlobs = [
      { x: width * 0.75, y: height * 0.35, r: 300, vx: 0.15, vy: -0.1, pulse: 0 },
      { x: width * 0.25, y: height * 0.7, r: 350, vx: -0.1, vy: 0.12, pulse: 1.5 },
      { x: width * 0.5, y: height * 0.5, r: 260, vx: 0.08, vy: -0.14, pulse: 3 }
    ];

    const embers = [];
    const EMBER_COUNT = 70;

    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 40;
        this.size = Math.random() * 2.2 + 0.8;
        this.vy = Math.random() * 1.8 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.fade = Math.random() * 0.005 + 0.003;
        this.hue = Math.random() > 0.25 ? 352 : 20;
      }
      update() {
        this.y -= this.vy;
        this.x += this.vx;
        this.alpha -= this.fade;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          this.x += (dx / dist) * 0.6;
          this.y += (dy / dist) * 0.6;
        }

        if (this.y < -20 || this.alpha <= 0) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.alpha})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsla(${this.hue}, 100%, 55%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < EMBER_COUNT; i++) {
      const e = new Ember();
      e.y = Math.random() * height;
      embers.push(e);
    }

    function renderNebula() {
      ctx.clearRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'screen';
      nebulaBlobs.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        b.pulse += 0.015;

        if (b.x < -100 || b.x > width + 100) b.vx *= -1;
        if (b.y < -100 || b.y > height + 100) b.vy *= -1;

        const currentR = b.r + Math.sin(b.pulse) * 35;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, currentR);
        grad.addColorStop(0, 'rgba(255, 30, 66, 0.32)');
        grad.addColorStop(0.5, 'rgba(180, 10, 40, 0.12)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      embers.forEach(e => {
        e.update();
        e.draw();
      });

      requestAnimationFrame(renderNebula);
    }
    requestAnimationFrame(renderNebula);
  }

  // ==============================================================
  // 6. ODOMETER ROLLING STATS
  // ==============================================================
  let odometerStarted = false;
  function startOdometer() {
    if (odometerStarted) return;
    odometerStarted = true;

    const rollElements = document.querySelectorAll('.roll-number');
    rollElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-final'), 10) || 10;
      let count = 0;
      const speed = Math.max(20, Math.floor(1000 / target));

      const timer = setInterval(() => {
        count++;
        el.textContent = count;
        if (count >= target) {
          el.textContent = target;
          clearInterval(timer);
        }
      }, speed);
    });
  }

  // ==============================================================
  // 7. 3D ROTATING CYLINDER CAROUSEL
  // ==============================================================
  const cylinderRing = document.getElementById('cylinder-ring');
  const cylinderCards = document.querySelectorAll('.cylinder-card');
  const btn3D = document.getElementById('btn-3d-mode');
  const btnGrid = document.getElementById('btn-grid-mode');
  const cylinderViewport = document.getElementById('cylinder-viewport');
  const gridView = document.getElementById('projects-grid-view');

  const TOTAL_CARDS = cylinderCards.length;
  const getRadius = () => {
    if (window.innerWidth < 480) return 210;
    if (window.innerWidth < 768) return 260;
    return 460;
  };

  let cylinderAngle = 0;
  let targetAngle = 0;
  let isDragging = false;
  let startX = 0;
  let autoRotate = true;

  function layoutCylinderCards() {
    const r = getRadius();
    cylinderCards.forEach((card, idx) => {
      const cardAngle = (idx / TOTAL_CARDS) * 360;
      card.style.transform = `rotateY(${cardAngle}deg) translateZ(${r}px)`;
    });
  }
  layoutCylinderCards();
  window.addEventListener('resize', layoutCylinderCards);

  if (cylinderRing && cylinderViewport) {
    // Desktop Mouse Drag
    window.addEventListener('mousedown', (e) => {
      if (e.target.closest('#cylinder-viewport')) {
        isDragging = true;
        startX = e.clientX;
        autoRotate = false;
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      startX = e.clientX;
      targetAngle += deltaX * 0.35;
      playCyberTone('tick');
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        setTimeout(() => (autoRotate = true), 2500);
      }
    });

    // Mobile / Touch Drag & Swipe Support
    let touchStartX = 0;
    let isTouching = false;

    cylinderViewport.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        isTouching = true;
        touchStartX = e.touches[0].clientX;
        autoRotate = false;
      }
    }, { passive: true });

    cylinderViewport.addEventListener('touchmove', (e) => {
      if (!isTouching || !e.touches || e.touches.length === 0) return;
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - touchStartX;
      touchStartX = currentX;
      targetAngle += deltaX * 0.45;
    }, { passive: true });

    const endTouch = () => {
      if (isTouching) {
        isTouching = false;
        setTimeout(() => (autoRotate = true), 2500);
      }
    };
    cylinderViewport.addEventListener('touchend', endTouch);
    cylinderViewport.addEventListener('touchcancel', endTouch);

    // Mouse wheel support
    cylinderViewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      autoRotate = false;
      targetAngle += e.deltaY * 0.25;
      playCyberTone('tick');
      setTimeout(() => (autoRotate = true), 2500);
    }, { passive: false });

    function updateCylinder() {
      if (autoRotate) {
        targetAngle -= 0.15;
      }
      cylinderAngle += (targetAngle - cylinderAngle) * 0.1;
      cylinderRing.style.transform = `rotateY(${cylinderAngle}deg)`;
      requestAnimationFrame(updateCylinder);
    }
    requestAnimationFrame(updateCylinder);
  }

  if (btn3D && btnGrid) {
    btn3D.addEventListener('click', () => {
      btn3D.classList.add('active');
      btnGrid.classList.remove('active');
      if (cylinderViewport) cylinderViewport.style.display = 'flex';
      if (gridView) gridView.style.display = 'none';
      playCyberTone('click');
    });

    btnGrid.addEventListener('click', () => {
      btnGrid.classList.add('active');
      btn3D.classList.remove('active');
      if (cylinderViewport) cylinderViewport.style.display = 'none';
      if (gridView) gridView.style.display = 'grid';
      playCyberTone('click');
    });
  }

  // ==============================================================
  // 8. 3D SWINGING LANYARD ID BADGE DYNAMICS
  // ==============================================================
  const swingingBadge = document.getElementById('swinging-badge');
  if (swingingBadge) {
    let badgeAngle = 0;
    let badgeTarget = 0;
    let badgeVelocity = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = swingingBadge.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const diff = (e.clientX - centerX) / (window.innerWidth / 2);
      badgeTarget = diff * 22;
    });

    function updateBadgePhysics() {
      const force = (badgeTarget - badgeAngle) * 0.08;
      badgeVelocity = badgeVelocity * 0.88 + force;
      badgeAngle += badgeVelocity;
      swingingBadge.style.transform = `rotate(${badgeAngle.toFixed(2)}deg) rotateY(${(badgeAngle * 0.6).toFixed(2)}deg)`;
      requestAnimationFrame(updateBadgePhysics);
    }
    requestAnimationFrame(updateBadgePhysics);
  }

  // ==============================================================
  // 9. CONTACT FORM SUBMISSION
  // ==============================================================
  const contactForm = document.getElementById('cyber-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playCyberTone('success');
      const submitBtn = contactForm.querySelector('.btn-send-message');
      const origText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>TRANSMITTING TO ANANTHA KRISHNAN...</span> <i data-lucide="loader"></i>`;
      if (window.lucide) window.lucide.createIcons();
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<span>MESSAGE RECEIVED!</span> <i data-lucide="check-circle"></i>`;
        submitBtn.style.backgroundColor = '#10b981';
        submitBtn.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.9)';
        if (window.lucide) window.lucide.createIcons();
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.boxShadow = '';
          submitBtn.disabled = false;
          if (window.lucide) window.lucide.createIcons();
        }, 3500);
      }, 1200);
    });
  }

  // ==============================================================
  // 10. ENTERPRISE LOGISTICS SIMULATOR ENGINE
  // ==============================================================

  // Tab Switching
  const simTabBtns = document.querySelectorAll('.sim-tab-btn');
  const simPanels = document.querySelectorAll('.sim-panel');

  simTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      simTabBtns.forEach(b => b.classList.remove('active'));
      simPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const activePanel = document.getElementById(targetTab);
      if (activePanel) activePanel.classList.add('active');
      playCyberTone('click');
    });
  });

  // Tab 1: RTI Salary & Incentive Calculation Logic
  const sliderDistance = document.getElementById('slider-distance');
  const sliderTarget = document.getElementById('slider-target');
  const checkNight = document.getElementById('check-night');
  const txtDistVal = document.getElementById('txt-dist-val');
  const txtTargetVal = document.getElementById('txt-target-val');

  const rcBaseFare = document.getElementById('rc-base-fare');
  const rcRtiIncentive = document.getElementById('rc-rti-incentive');
  const rcFuelBonus = document.getElementById('rc-fuel-bonus');
  const rcNightBonus = document.getElementById('rc-night-bonus');
  const rcGrossTotal = document.getElementById('rc-gross-total');

  function calculateRtiPayroll() {
    if (!sliderDistance || !sliderTarget) return;

    const distance = parseInt(sliderDistance.value, 10);
    const target = parseInt(sliderTarget.value, 10);
    const isNight = checkNight ? checkNight.checked : false;

    if (txtDistVal) txtDistVal.textContent = `${distance} KM`;
    if (txtTargetVal) txtTargetVal.textContent = `${target} %`;

    // Formula mimicking Kassapos enterprise payroll rules:
    const baseFare = Math.round(distance * 8.5);
    const rtiIncentive = Math.round(baseFare * (target / 100) * 0.22);
    const fuelBonus = distance >= 300 ? 450 : 250;
    const nightBonus = isNight ? 500 : 0;
    const grossTotal = baseFare + rtiIncentive + fuelBonus + nightBonus;

    if (rcBaseFare) rcBaseFare.textContent = `₹${baseFare.toLocaleString('en-IN')}`;
    if (rcRtiIncentive) rcRtiIncentive.textContent = `+ ₹${rtiIncentive.toLocaleString('en-IN')}`;
    if (rcFuelBonus) rcFuelBonus.textContent = `+ ₹${fuelBonus.toLocaleString('en-IN')}`;
    if (rcNightBonus) rcNightBonus.textContent = `+ ₹${nightBonus.toLocaleString('en-IN')}`;
    if (rcGrossTotal) rcGrossTotal.textContent = `₹${grossTotal.toLocaleString('en-IN')}`;
  }

  if (sliderDistance) {
    sliderDistance.addEventListener('input', () => {
      calculateRtiPayroll();
      playCyberTone('tick');
    });
  }
  if (sliderTarget) {
    sliderTarget.addEventListener('input', () => {
      calculateRtiPayroll();
      playCyberTone('tick');
    });
  }
  if (checkNight) {
    checkNight.addEventListener('change', () => {
      calculateRtiPayroll();
      playCyberTone('lock');
    });
  }

  // Initial calculation
  calculateRtiPayroll();

  // Tab 2: Role Dashboard Switcher
  const roleSubTabs = document.querySelectorAll('.role-sub-tab');
  const roleKpiGrid = document.getElementById('role-kpi-grid');

  const roleDataMap = {
    transport: [
      { label: 'Active Fleet in Transit', val: '48 / 52', meta: '92.3% ON-ROUTE', alert: false },
      { label: 'Live GPS Telemetry', val: 'CONNECTED', meta: '0.04s LATENCY', alert: false },
      { label: 'Avg Delivery Checkpoints', val: '99.4%', meta: '142 CHECKPOINTS', alert: false },
      { label: 'Route Transit Drift', val: '-4 Mins', meta: 'AHEAD OF SCHEDULE', alert: false }
    ],
    accounts: [
      { label: 'Pending Invoicing Queue', val: '₹4,82,400', meta: '18 INVOICES PENDING', alert: true },
      { label: 'Automated GST Cleared', val: '₹12.8 Lakh', meta: 'RECONCILED IN SQL', alert: false },
      { label: 'Payables / Receivables Ratio', val: '1 : 2.4', meta: 'HEALTHY RATIO', alert: false },
      { label: 'Invoice Gen Turnaround', val: '2.4 Hrs', meta: '80% TIME SAVED', alert: false }
    ],
    maintenance: [
      { label: 'Fleet Diagnostic Score', val: '98.2%', meta: 'FLEET HEALTHY', alert: false },
      { label: 'Scheduled Service Due', val: '6 Trucks', meta: 'BOOKED IN BAY', alert: true },
      { label: 'Engine Odometer Sensor', val: 'CALIBRATED', meta: '0.01% DRIFT', alert: false },
      { label: 'Fuel Leak Alerts', val: '0 ACTIVE', meta: 'ALL SENSORS NORMAL', alert: false }
    ],
    customer: [
      { label: 'Active Consignments', val: '380 Shipments', meta: 'LIVE EN-ROUTE', alert: false },
      { label: 'Digital POD Signed', val: '98.9%', meta: 'INSTANT SYNC', alert: false },
      { label: 'WhatsApp Alerts Dispatched', val: '2,840 Today', meta: 'AUTOMATED API', alert: false },
      { label: 'Customer SLA Satisfaction', val: '99.2%', meta: 'TARGET EXCEEDED', alert: false }
    ]
  };

  function renderRoleKpis(roleKey) {
    if (!roleKpiGrid) return;
    const items = roleDataMap[roleKey] || roleDataMap.transport;
    roleKpiGrid.innerHTML = items.map(item => `
      <div class="role-kpi-card glass-hud">
        <span class="kpi-title">${item.label}</span>
        <span class="kpi-number">${item.val}</span>
        <span class="kpi-meta-badge ${item.alert ? 'alert' : ''}">
          <i data-lucide="${item.alert ? 'alert-circle' : 'check-circle-2'}"></i> ${item.meta}
        </span>
      </div>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  roleSubTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      roleSubTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const role = tab.getAttribute('data-role');
      renderRoleKpis(role);
      playCyberTone('click');
    });
  });

  // Render default role KPIs
  renderRoleKpis('transport');

  // Tab 3: Barcode Stock Scanner
  const btnTriggerScan = document.getElementById('btn-trigger-scan');
  const scanSku = document.getElementById('scan-sku');
  const scanItem = document.getElementById('scan-item');
  const scanLocation = document.getElementById('scan-location');
  const scanStatus = document.getElementById('scan-status');

  const mockInventoryItems = [
    { sku: 'KP-LOG-8838-TRK', name: 'Hydraulic Brake Rotor Kit', loc: 'Bay 4-C, Ambattur Hub', status: 'VERIFIED & SYNCED (0.012s)' },
    { sku: 'KP-ERP-9214-ENG', name: 'High-Pressure Common Rail Sensor', loc: 'Bin 12-A, Sriperumbudur', status: 'VERIFIED & SYNCED (0.008s)' },
    { sku: 'KP-FLEET-4401-AXL', name: 'Fleet Rear Differential Assembly', loc: 'Bay 7-D, Ennore Port Hub', status: 'VERIFIED & SYNCED (0.015s)' },
    { sku: 'KP-WH-1107-CAB', name: 'Driver Dashboard Telemetry Gateway', loc: 'Rack 2-B, Guindy Station', status: 'VERIFIED & SYNCED (0.009s)' }
  ];
  let scanIndex = 0;

  if (btnTriggerScan) {
    btnTriggerScan.addEventListener('click', () => {
      playCyberTone('scan');
      scanIndex = (scanIndex + 1) % mockInventoryItems.length;
      const current = mockInventoryItems[scanIndex];

      btnTriggerScan.innerHTML = `<i data-lucide="loader"></i> <span>SCANNING BARCODE...</span>`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        if (scanSku) scanSku.textContent = current.sku;
        if (scanItem) scanItem.textContent = current.name;
        if (scanLocation) scanLocation.textContent = current.loc;
        if (scanStatus) {
          scanStatus.textContent = current.status;
          scanStatus.classList.add('success');
        }
        playCyberTone('success');

        btnTriggerScan.innerHTML = `<i data-lucide="scan"></i> <span>TRIGGER BARCODE SCAN</span>`;
        if (window.lucide) window.lucide.createIcons();
      }, 350);
    });
  }

  // ==============================================================
  // 11. CYBER DEVELOPER EXECUTION CLI TERMINAL
  // ==============================================================
  const termBody = document.getElementById('term-body');
  const termForm = document.getElementById('term-form');
  const termInput = document.getElementById('term-input');
  const quickCmdBtns = document.querySelectorAll('.btn-quick-cmd');

  const termResponses = {
    'sp_rti': `[EXEC SQL SP]: sp_CalculateDriverRTI @DriverID=8841, @DateRange='2026-Q1'
--------------------------------------------------------------------------------
Trip Route: Chennai Ambattur -> Sriperumbudur Hub (340 KM)
Base Freight Allowance:    ₹2,890.00
On-Time Efficiency (96%):  + ₹610.00  [TIER-1 INCENTIVE]
Fuel Bonus (>300km):       + ₹450.00  [OPTIMAL RANGE]
Night Run Dispatch:        + ₹500.00  [VERIFIED LOG]
--------------------------------------------------------------------------------
GROSS PAYOUT DISBURSED:    ₹4,450.00
Status: SUCCESS (1 row affected, Query Execution Time: 0.009s)`,

    'fleet': `[KASSAPOS FLEET TELEMETRY // AMBATTUR HUB]
--------------------------------------------------------------------------------
Active Fleet in Transit:   48 / 52 Trucks (92.3% Active)
GPS Gateway Latency:       0.04s [STABLE - LOW JITTER]
Consignments en Route:     380 Active Consignments
On-Time Route Compliance:  99.4% Across All Hubs
Fuel Leak Sensors:         0 ALERTS [ALL SENSORS NORMAL]`,

    'architecture': `[SYSTEM TOPOLOGY: KASSAPOS ENTERPRISE LOGISTICS]
--------------------------------------------------------------------------------
TIER 1 (Edge):    Flutter Mobile (Android) + jQWidgets Web Portal + Barcode HW
TIER 2 (Gateway): RESTful Web API Services + RBAC + WhatsApp Notification API
TIER 3 (Core):    C# / ASP.NET MVC State Machine + RTI Engine + E-Invoicing
TIER 4 (Data):    MS SQL Server (Indexed Stored Procs, ACID Ledger, Crystal Reports)`,

    'whoami': `[USER IDENT: ANANTHA KRISHNAN P]
--------------------------------------------------------------------------------
Role:        Full-Stack .NET & Flutter Developer
Company:     Kassapos Software Solutions (Chennai, India)
Tenure:      September 2023 – Present (~2.5+ Years)
Education:   B.E. Computer Science & Engineering (Anna University, 2023)
Language:    JLPT N5 Certified (The Japan Foundation)`,

    'skills': `[TECHNICAL STACK MATRIX]
--------------------------------------------------------------------------------
Backend:     C#, ASP.NET MVC, .NET Core, Web API, LINQ
Database:    MS SQL Server, Stored Procedures, T-SQL, Query Optimization
Mobile:      Flutter, Dart, Android SDK, Offline Sync, REST Integration
Frontend:    JavaScript (ES6+), jQuery, jQWidgets, HTML5, CSS3, Bootstrap
Reporting:   Crystal Reports, iTextSharp PDF Generation
DevOps/Tool: Git, GitHub, Docker, Postman, IIS Server`,

    'contact': `[COMMUNICATION CHANNELS]
--------------------------------------------------------------------------------
Email:       ananthakrishnan1177@gmail.com
Phone:       (+91) 8838098841
WhatsApp:    https://wa.me/918838098841
LinkedIn:    https://www.linkedin.com/in/anantha-krishnan17/
GitHub:      https://github.com/ananthakrishnan17
Portfolio:   https://ananthakrishnan17.github.io/portfolio/`
  };

  function executeCliCommand(rawCmd) {
    if (!termBody) return;
    const cmd = rawCmd.trim().toLowerCase();
    playCyberTone('click');

    // Echo command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="prompt-host">[krishnan@kassapos-core]$</span> <span class="term-text">${rawCmd}</span>`;
    termBody.appendChild(cmdLine);

    if (cmd === 'clear') {
      termBody.innerHTML = `
        <div class="term-line welcome">
          <span class="prompt-host">[krishnan@kassapos-core]$</span>
          <span class="term-text">// SCREEN CLEARED. KASSAPOS CLI READY.</span>
        </div>
      `;
      return;
    }

    let output = '';
    if (cmd.includes('rti') || cmd.includes('sp_')) {
      output = termResponses['sp_rti'];
    } else if (cmd.includes('fleet') || cmd.includes('truck')) {
      output = termResponses['fleet'];
    } else if (cmd.includes('arch') || cmd.includes('topo')) {
      output = termResponses['architecture'];
    } else if (cmd.includes('who') || cmd.includes('about')) {
      output = termResponses['whoami'];
    } else if (cmd.includes('skill') || cmd.includes('tech')) {
      output = termResponses['skills'];
    } else if (cmd.includes('contact') || cmd.includes('mail') || cmd.includes('phone')) {
      output = termResponses['contact'];
    } else if (cmd === 'help') {
      output = `Available Commands:
  sp_rti         - Execute Driver RTI Calculation Stored Procedure
  fleet          - Check active fleet transit status & GPS telemetry
  architecture   - Inspect 4-tier system topology
  whoami         - View Anantha Krishnan's profile & role
  skills         - List languages, databases & frameworks
  contact        - Direct phone, email, and social links
  clear          - Clear terminal logs`;
    } else {
      output = `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`;
    }

    const outLine = document.createElement('div');
    outLine.className = 'term-line';
    outLine.innerHTML = `<pre class="term-output-block">${output}</pre>`;
    termBody.appendChild(outLine);

    termBody.scrollTop = termBody.scrollHeight;
    playCyberTone('success');
  }

  if (termForm && termInput) {
    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = termInput.value.trim();
      if (!val) return;
      executeCliCommand(val);
      termInput.value = '';
    });
  }

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (termInput) termInput.value = cmd;
      executeCliCommand(cmd);
      if (termInput) termInput.value = '';
    });
  });

  // Mobile toggle & navigation drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      playCyberTone('click');
      navMenu.classList.toggle('mobile-open');
    });

    // Close when clicking any nav menu link
    navMenu.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('mobile-open');
      }
    });
  }
});
