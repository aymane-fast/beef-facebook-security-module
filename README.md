# Facebook Phishing Module for BeEF Framework

## 🛡️ **LEGAL DISCLAIMER & WARNING**

**⚠️ EDUCATIONAL AND AUTHORIZED TESTING ONLY ⚠️**

This project is developed **EXCLUSIVELY** for:
- **Educational purposes** and cybersecurity learning
- **Authorized penetration testing** with explicit written permission
- **Security research** in controlled environments
- **Red team exercises** with proper authorization

### 🚨 IMPORTANT LEGAL NOTICE

**THE AUTHOR(S) ARE NOT RESPONSIBLE FOR ANY MISUSE OF THIS SOFTWARE.**

- **Unauthorized use** of this software is **ILLEGAL** and may violate:
  - Computer Fraud and Abuse Act (CFAA)
  - Digital Millennium Copyright Act (DMCA)
  - Local, state, and international cybersecurity laws
  - Terms of service of online platforms

- **You are solely responsible** for ensuring compliance with all applicable laws
- **Always obtain explicit written permission** before testing on any systems
- **Use only in isolated, controlled environments** for legitimate purposes

**BY USING THIS SOFTWARE, YOU AGREE TO USE IT RESPONSIBLY AND LEGALLY.**

---

## 📋 **Project Overview**

A sophisticated **Facebook phishing module** for the Browser Exploitation Framework (BeEF) that demonstrates advanced client-side attack techniques and social engineering principles.

### 🎯 **Technical Features**

- **Perfect Facebook UI Replica** - Pixel-perfect recreation of Facebook's login interface
- **Automatic Session Management** - Continuous logout functionality to increase credibility
- **Responsive Design** - Mobile and desktop compatibility
- **DOM Manipulation** - Advanced JavaScript techniques for seamless page replacement
- **Auto-Run Capability** - Automatic execution without manual intervention
- **Persistent Execution** - Handles page reloads and revisits
- **Real-time Data Capture** - Secure credential transmission to BeEF server
- **Seamless Redirection** - Transparent redirect to legitimate Facebook post-submission

## 🏗️ **Architecture**

### **Component Structure**
```
Beef module facebook/
├── command.js      # Client-side JavaScript execution
├── config.yaml     # Module configuration and metadata
├── module.rb       # Server-side Ruby backend

```

### **Technical Implementation**

#### **Frontend (command.js)**
- **Scope Management**: All functions contained within `beef.execute()` closure
- **DOM Ready Detection**: Robust timing mechanism to ensure reliable execution
- **Function Exposure**: Global window binding for form interaction
- **Error Handling**: Graceful execution flow management
- **Persistence Logic**: Timestamp-based execution control for reload handling

#### **Backend (module.rb)**
- **Configuration Management**: Dynamic option handling
- **Data Processing**: Credential capture and storage
- **Parameter Injection**: ERB template variable population

#### **Configuration (config.yaml)**
- **Module Metadata**: Author, category, and description
- **Target Specification**: Browser and OS compatibility
- **BeEF Integration**: Framework-specific settings

## 🔧 **Installation & Setup**

### **Prerequisites**
- BeEF Framework (Browser Exploitation Framework)
- Ruby environment
- Web server capability

### **Installation Steps**

1. **Clone Repository**
   ```bash
   git clone [repository-url]
   cd facebook-phishing-module
   ```

2. **Deploy to BeEF**
   ```bash
   cp -r "Beef module facebook/" /path/to/beef/modules/social_engineering/
   ```

3. **Configure BeEF**
   - Enable the module in BeEF configuration
   - Set up Auto Run rules (optional)
   - Configure target parameters

4. **Launch BeEF Framework**
   ```bash
   cd /path/to/beef
   ./beef
   ```

## ⚙️ **Configuration Options**

| Parameter | Description | Default | Purpose |
|-----------|-------------|---------|---------|
| `xss_hook_url` | Post-execution redirect URL | `#{base_host}/demos/basic.html` | Maintain BeEF hook |
| `logout_facebook_interval` | Facebook logout frequency (ms) | `10000` | Session invalidation |
| `wait_seconds_before_redirect` | Submission delay (ms) | `1000` | Data transmission buffer |

## 🧪 **Usage for Authorized Testing**

### **Auto Run Configuration**
1. Access BeEF Control Panel
2. Navigate to **Auto Run** tab
3. Create new rule with target parameters
4. Assign Facebook Phishing module
5. Configure execution parameters

### **Manual Execution**
1. Hook target browser through BeEF
2. Select hooked browser in **Zombies** panel
3. Execute **Facebook Phishing** module from **Social Engineering** category
4. Monitor results in **Command History**


### **Testing Standards**
- **Always obtain written authorization**
- **Document all testing activities**
- **Limit scope to authorized targets**
- **Protect captured data appropriately**
- **Follow organizational security policies**


## 🤝 **Contributing**

Contributions for educational and security research purposes are welcome




## ⚖️ **Final Legal Reminder**

y
**🛡️ USE RESPONSIBLY. STAY LEGAL. PROTECT PRIVACY. 🛡️**
