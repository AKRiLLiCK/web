---
title: "Automated Electron Security Auditing with Electronegativity"
description: "A structured architectural security course focused on static analysis, process isolation, and native bridge exploitation in Electron applications."
date: 2026-05-17
tags: ["SecOps", "Application Security", "Electron", "Code Review"]
layout: "../layouts/CourseLayout.astro"
bannerImage: "../../assets/covers/automated-electron-security-auditing-with-electronegativity.png"
---

## Course Overview
This course covers the structural auditing of Electron applications using Doyensec's Electronegativity static analysis engine. It focuses on isolating process vulnerabilities, identifying AST/DOM security anti-patterns, mapping configuration defects to remote execution vectors, and executing practical verification labs.

---

## Core Resources & Documentation
Before beginning, bookmark and review the foundational specifications:
* **Framework Standard:** [Electron Official Security Guidelines](https://www.electronjs.org/docs/latest/tutorial/security)
* **Auditing Standard:** [Doyensec Electron Security Checklist Whitepaper](https://doyensec.com/research.html)
* **Engine Manual:** [Electronegativity Documentation Wiki](https://github.com/doyensec/electronegativity/wiki)
* **Target Vulnerable Environment:** [Damn Vulnerable ElectronJS App (DVEA)](https://github.com/njmulsqb/DVEA)

---

### Module 1: Tool Architecture & Execution
* **1.1 The Auditing Engine:** Analysis of Atomic Checks (single-pass Abstract Syntax Tree parsing) versus Global Checks (multi-pass contextual validation across files). See [Electronegativity Architecture Specs](https://github.com/doyensec/electronegativity/wiki/Custom-Checks).
* **1.2 CLI Pipeline Mechanics:** Configuration of target entry points, output formatting ([SARIF Standard Format](https://sarifweb.azurewebsites.net/) / CSV formats for CI/CD integration), and precise check targeting via execution filters.
* **1.3 Triage Methodology:** Differentiating between deterministic vulnerabilities, structural misconfigurations, and *Review Required* heuristics.

**Practical Tasks & Resources:**
1. Install Electronegativity globally via the [NPM Registry Package](https://www.npmjs.com/package/@doyensec/electronegativity) and verify execution flags using `electronegativity --help`.
2. Extract the production target archive using the official [Electron ASAR Utility](https://github.com/electron/asar): `npx asar extract app.asar ./extracted_src`.
3. Execute a baseline scan against the directory and pipe the results into a structured SARIF file: `electronegativity -i ./extracted_src -o results.sarif -f sarif`.

### Module 2: Process Isolation & Sandbox Mechanics
* **2.1 Node.js Integration (`NODE_INTEGRATION_JS_CHECK`):** Structural risk analysis of enabling backend runtime access directly within the DOM context. Reference the [Doyensec Node Integration Deep Dive](https://blog.doyensec.com/2017/08/03/electron-framework-security.html).
* **2.2 Context Isolation (`CONTEXT_ISOLATION_JS_CHECK`):** Mechanisms preventing prototype pollution, scope leakage, and API hijacking between the Preload layer and the Renderer layer. Reference the [Electron Context Isolation Tutorial](https://www.electronjs.org/docs/latest/tutorial/context-isolation).
* **2.3 Chromium Sandboxing (`SANDBOX_JS_CHECK`):** Enforcement of OS-level process restrictions to contain Renderer execution boundaries. See [Electron Sandbox Configuration](https://www.electronjs.org/docs/latest/tutorial/sandbox).

**Practical Tasks & Resources:**
1. Locate the main process instantiation file (typically `main.js` or `index.js`) in the [DVEA Repository Codebase](https://github.com/njmulsqb/DVEA).
2. Audit the `BrowserWindow` constructor configuration. Identify if `nodeIntegration` is enabled or if `contextIsolation` is explicitly disabled using the [Electronegativity BrowserWindow Checks Wiki](https://github.com/doyensec/electronegativity/wiki/NODE_INTEGRATION_JS_CHECK).
3. Map out the `ELECTRON_VERSION_JSON_CHECK` output against the upstream [Electron Releases Security Feed](https://github.com/electron/electron/releases) to evaluate potential sandbox escape vectors.

### Module 3: Navigation & Window Lifecycle Exploitation
* **3.1 Origin Validation (`LIMIT_NAVIGATION_GLOBAL_CHECK`):** Auditing `will-navigate` and `new-window` event interceptors to prevent unauthorized cross-origin navigation. Review [Doyensec: Subverting Electron via Insecure Preload](https://blog.doyensec.com/2019/04/24/subverting-electron-with-insecure-preload.html).
* **3.2 Input Handling Subversion (`AUXCLICK_JS_CHECK`):** Context analysis of non-standard mouse event dispatching bypassing standard click verification. See [Electronegativity Auxclick Specification](https://github.com/doyensec/electronegativity/wiki/AUXCLICK_JS_CHECK).
* **3.3 Pop-up Context Control (`ALLOWPOPUPS_HTML_CHECK`):** Strict constraint enforcement on `<webview>` tag injection and execution parameters. Review the [Electron Webview Tag Warning](https://www.electronjs.org/docs/latest/api/webview-tag).

**Practical Tasks & Resources:**
1. Search the codebase for instances of `.on('will-navigate')`. Verify if the handler implements strict regex checking using patterns outlined in the [Electronegativity Navigation Control Wiki](https://github.com/doyensec/electronegativity/wiki/LIMIT_NAVIGATION_JS_CHECK).
2. Verify if the target application drops protection routines when processing middle-click execution flows via `auxclick` event handlers.

### Module 4: Network & Content Security Policy
* **4.1 Same-Origin Policy Modification (`WEB_SECURITY_JS_CHECK`):** Risks associated with decoupling browser-native isolation boundaries. Reference the [MDN Same-Origin Policy Guide](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
* **4.2 Insecure Transport Sinks (`INSECURE_CONTENT_JS_CHECK`):** Auditing for cleartext HTTP resolution and mixed-content compilation. Reference [W3C Mixed Content Specifications](https://www.w3.org/TR/mixed-content/).
* **4.3 Content Security Policy (`CSP_GLOBAL_CHECK`):** Verification and syntax hardening of application-wide CSP directives. Review the [MDN Content Security Policy (CSP) Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

**Practical Tasks & Resources:**
1. Run a filtered Electronegativity scan strictly checking for CSP defects: `electronegativity -i ./src -l CSP_GLOBAL_CHECK`.
2. Cross-reference findings with the [Doyensec Electronegativity CSP Guide](https://github.com/doyensec/electronegativity/wiki/CSP_GLOBAL_CHECK) to analyze the fallback permissions when a policy is weak or missing.

### Module 5: Native Bridges & OS-Level Exploitation
* **5.1 Preload Script Leakage (`PRELOAD_JS_CHECK`):** Reviewing excessive capability exposure across the `contextBridge`. Review [Doyensec: Electron APIs Misuse](https://blog.doyensec.com/2021/02/25/electron-apis-misuse.html).
* **5.2 Command Injection Sinks (`OPEN_EXTERNAL_JS_CHECK`):** Analyzing `shell.openExternal()` integration for unsanitized URI scheme execution. See [Electron Shell Module Documentation](https://www.electronjs.org/docs/latest/api/shell).
* **5.3 Deep Linking Flaws (`PROTOCOL_HANDLER_JS_CHECK`):** Auditing `setAsDefaultProtocolClient` parameters against argument injection vectors. Reference the [Electron Custom Protocol Tutorial](https://www.electronjs.org/docs/latest/tutorial/launch-app-from-url-in-another-app).

**Practical Tasks & Resources:**
1. Audit `preload.js` and trace all endpoints exposed via `contextBridge.exposeInMainWorld` using the [Electronegativity Preload Script Rules](https://github.com/doyensec/electronegativity/wiki/PRELOAD_JS_CHECK).
2. Build a proof-of-concept payload targeting a detected `shell.openExternal()` misconfiguration, using test links found on the [Electronegativity Open External Exploit Wiki](https://github.com/doyensec/electronegativity/wiki/OPEN_EXTERNAL_JS_CHECK) to attempt to run local executable protocols (`file://` or custom deep links).

### Module 6: Exploit Weaponization & Remediation Validation
* **6.1 Proof of Concept Generation:** Translating theoretical AST alerts into viable exploit chains (e.g., escalating Cross-Site Scripting to Remote Code Execution).
* **6.2 Patch Validation:** Re-auditing configurations post-remediation to ensure context bridges are securely implemented without exposing native Node.js functionality.

**Practical Tasks & Resources:**
1. Select a vulnerable IPC channel identified in DVEA. Draft a functional JavaScript payload that leverages a frontend XSS vulnerability to execute arbitrary system commands via the exposed bridge.
2. Patch the vulnerability in the DVEA source code by implementing robust `contextBridge` validation and strictly typing the allowed IPC channels.
3. Re-run the Electronegativity static analysis pipeline against your patched source directory to confirm the alert is fully resolved.