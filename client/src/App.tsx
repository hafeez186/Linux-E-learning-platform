import React, { useState } from 'react';
import './App.css';

interface Lesson {
  id: number;
  title: string;
  content: string;
  commands?: string[];
  practice?: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const linuxCourses: Course[] = [
    {
      id: 1,
      title: "Linux Fundamentals",
      description: "Learn the basics of Linux operating system",
      lessons: [
        {
          id: 1,
          title: "Introduction to Linux",
          content: `
            Linux is a powerful, open-source operating system that forms the backbone of much of the internet and modern computing infrastructure.

            ## What is Linux?
            - Linux is a Unix-like operating system kernel
            - It's free and open source
            - Used in servers, desktops, mobile devices, and embedded systems
            - Powers Android, web servers, supercomputers, and more

            ## Key Features:
            - Multi-user and multitasking
            - Security and stability
            - Command-line interface (CLI)
            - Package management systems
            - Vast software repository

            ## Popular Linux Distributions:
            - Ubuntu - User-friendly for beginners
            - CentOS/RHEL - Enterprise-focused
            - Debian - Stable and reliable
            - Fedora - Cutting-edge features
          `,
          practice: "Explore your Linux system by opening a terminal and running basic commands."
        },
        {
          id: 2,
          title: "File System Navigation",
          content: `
            Understanding the Linux file system is crucial for effective system administration and daily use.

            ## Linux Directory Structure:
            - **/** - Root directory (top of the hierarchy)
            - **/home** - User home directories
            - **/etc** - System configuration files
            - **/var** - Variable data (logs, temp files)
            - **/usr** - User programs and data
            - **/bin** - Essential command binaries

            ## Navigation Concepts:
            - **Absolute paths** start with / (e.g., /home/user/documents)
            - **Relative paths** are relative to current location
            - **~** represents your home directory
            - **.** represents current directory
            - **..** represents parent directory
          `,
          commands: [
            "pwd",
            "ls",
            "cd",
            "cd ~",
            "cd ..",
            "cd /etc"
          ],
          practice: "Navigate through different directories and understand the file system structure."
        },
        {
          id: 3,
          title: "Basic Commands (ls, cd, pwd)",
          content: `
            Master these essential commands that you'll use every day in Linux.

            ## Essential Navigation Commands:

            ### pwd (Print Working Directory)
            Shows your current location in the file system.
            
            ### ls (List Directory Contents)
            Displays files and directories in the current location.
            - \`ls -l\` - Long format (detailed view)
            - \`ls -a\` - Show hidden files (starting with .)
            - \`ls -la\` - Combine long format and hidden files
            - \`ls -h\` - Human-readable file sizes

            ### cd (Change Directory)
            Moves you between directories.
            - \`cd [directory]\` - Change to specific directory
            - \`cd\` or \`cd ~\` - Go to home directory
            - \`cd ..\` - Go to parent directory
            - \`cd -\` - Go to previous directory
          `,
          commands: [
            "pwd",
            "ls",
            "ls -l",
            "ls -la",
            "cd /home",
            "cd ..",
            "cd ~"
          ],
          practice: "Practice navigating your system using pwd, ls, and cd commands."
        },
        {
          id: 4,
          title: "File Operations (cp, mv, rm)",
          content: `
            Learn to manipulate files and directories safely and efficiently.

            ## File Manipulation Commands:

            ### cp (Copy Files)
            Creates copies of files or directories.
            - \`cp file1 file2\` - Copy file1 to file2
            - \`cp file1 /path/to/destination/\` - Copy to another location
            - \`cp -r directory1 directory2\` - Copy directories recursively

            ### mv (Move/Rename Files)
            Moves or renames files and directories.
            - \`mv oldname newname\` - Rename file
            - \`mv file /path/to/destination/\` - Move file
            - \`mv directory1 directory2\` - Move/rename directory

            ### rm (Remove Files)
            Deletes files and directories. **Use with caution!**
            - \`rm filename\` - Delete file
            - \`rm -r directory\` - Delete directory and contents
            - \`rm -i filename\` - Interactive deletion (asks for confirmation)
            - \`rm -f filename\` - Force deletion (no confirmation)

            ## Safety Tips:
            - Always double-check before using rm
            - Use \`rm -i\` for interactive confirmation
            - Consider using trash commands instead of rm
          `,
          commands: [
            "touch testfile.txt",
            "cp testfile.txt backup.txt",
            "mv backup.txt backup_renamed.txt",
            "rm testfile.txt",
            "mkdir testdir",
            "rmdir testdir"
          ],
          practice: "Create, copy, move, and delete test files to practice these commands safely."
        },
        {
          id: 5,
          title: "Text Editors (vim, nano)",
          content: `
            Master text editing in the terminal - an essential skill for any Linux user.

            ## Nano - Beginner-Friendly Editor

            ### Basic Nano Usage:
            - \`nano filename\` - Open file in nano
            - **Ctrl + O** - Save file
            - **Ctrl + X** - Exit nano
            - **Ctrl + K** - Cut line
            - **Ctrl + U** - Paste line
            - **Ctrl + W** - Search for text

            ## Vim - Powerful Advanced Editor

            ### Vim Modes:
            - **Normal mode** - Navigation and commands (default)
            - **Insert mode** - Text editing (press 'i' to enter)
            - **Command mode** - Advanced operations (press ':')

            ### Basic Vim Commands:
            - \`vim filename\` - Open file in vim
            - **i** - Enter insert mode
            - **Esc** - Return to normal mode
            - **:w** - Save file
            - **:q** - Quit vim
            - **:wq** - Save and quit
            - **:q!** - Quit without saving

            ### Navigation in Vim:
            - **h, j, k, l** - Left, down, up, right
            - **w** - Move to next word
            - **b** - Move to previous word
            - **0** - Beginning of line
            - **$** - End of line
          `,
          commands: [
            "nano test.txt",
            "vim test.txt"
          ],
          practice: "Create and edit text files using both nano and vim to get comfortable with terminal text editing."
        }
      ]
    },
    {
      id: 2,
      title: "Linux System Administration",
      description: "Advanced Linux administration and management",
      lessons: [
        {
          id: 1,
          title: "User and Group Management",
          content: `
            Learn to manage users and groups effectively in Linux systems.

            ## User Management Commands:

            ### Adding Users:
            - \`useradd username\` - Add new user
            - \`useradd -m username\` - Add user with home directory
            - \`passwd username\` - Set user password

            ### Managing Users:
            - \`usermod -aG groupname username\` - Add user to group
            - \`userdel username\` - Delete user
            - \`userdel -r username\` - Delete user and home directory

            ## Group Management:
            - \`groupadd groupname\` - Create new group
            - \`groupdel groupname\` - Delete group
            - \`groups username\` - Show user's groups
            - \`id username\` - Show user and group IDs

            ## Important Files:
            - **/etc/passwd** - User account information
            - **/etc/group** - Group information
            - **/etc/shadow** - Password hashes (secure)
          `,
          commands: [
            "whoami",
            "id",
            "groups",
            "cat /etc/passwd",
            "cat /etc/group"
          ],
          practice: "Examine your current user and group information using these commands."
        },
        {
          id: 2,
          title: "Process Management & Monitoring",
          content: `
            Master process management for real-world server administration.

            ## Process Viewing Commands:
            - \`ps aux\` - Show all running processes
            - \`ps -ef\` - Full format listing
            - \`top\` - Real-time process viewer
            - \`htop\` - Enhanced interactive process viewer
            - \`pstree\` - Show process tree

            ## Process Control:
            - \`kill PID\` - Terminate process by ID
            - \`kill -9 PID\` - Force kill process
            - \`killall processname\` - Kill all processes by name
            - \`pkill pattern\` - Kill processes matching pattern
            - \`nohup command &\` - Run command immune to hangups

            ## Job Control:
            - \`command &\` - Run in background
            - \`jobs\` - List active jobs
            - \`fg %1\` - Bring job to foreground
            - \`bg %1\` - Send job to background
            - \`Ctrl+Z\` - Suspend current process

            ## Real-World Scenario: High CPU Usage
            **Problem**: Server is running slow, suspect high CPU usage
            **Solution**:
            1. \`top\` - Identify CPU-heavy processes
            2. \`ps aux --sort=-%cpu | head\` - Sort by CPU usage
            3. Investigate the problematic process
            4. Kill if necessary: \`kill -15 PID\` (graceful) or \`kill -9 PID\` (force)
          `,
          commands: [
            "ps aux",
            "top",
            "ps aux --sort=-%cpu | head -10",
            "ps aux --sort=-%mem | head -10",
            "pgrep -f nginx",
            "jobs",
            "nohup sleep 100 &"
          ],
          practice: "Monitor your system processes and practice safe process termination techniques."
        },
        {
          id: 3,
          title: "System Services & Systemd",
          content: `
            Master systemd for production server management.

            ## Systemd Service Management:
            - \`systemctl start service\` - Start a service
            - \`systemctl stop service\` - Stop a service
            - \`systemctl restart service\` - Restart a service
            - \`systemctl reload service\` - Reload service config
            - \`systemctl enable service\` - Enable at boot
            - \`systemctl disable service\` - Disable at boot
            - \`systemctl status service\` - Check service status

            ## Service Information:
            - \`systemctl list-units --type=service\` - List all services
            - \`systemctl list-units --failed\` - Show failed services
            - \`systemctl is-active service\` - Check if active
            - \`systemctl is-enabled service\` - Check if enabled

            ## Logs and Troubleshooting:
            - \`journalctl -u service\` - View service logs
            - \`journalctl -f\` - Follow logs in real-time
            - \`journalctl --since "1 hour ago"\` - Recent logs
            - \`journalctl -p err\` - Show only errors

            ## Real-World Scenario: Web Server Down
            **Problem**: Website is not accessible
            **Troubleshooting Steps**:
            1. \`systemctl status nginx\` - Check web server status
            2. \`journalctl -u nginx -n 50\` - Check recent logs
            3. \`netstat -tlnp | grep :80\` - Check if port 80 is listening
            4. \`systemctl restart nginx\` - Restart if needed
            5. \`systemctl enable nginx\` - Ensure starts on boot

            ## Creating Custom Services:
            Create \`/etc/systemd/system/myapp.service\`:
            \`\`\`
            [Unit]
            Description=My Application
            After=network.target

            [Service]
            Type=simple
            User=myuser
            ExecStart=/path/to/myapp
            Restart=always

            [Install]
            WantedBy=multi-user.target
            \`\`\`
          `,
          commands: [
            "systemctl status sshd",
            "systemctl list-units --type=service",
            "systemctl list-units --failed",
            "journalctl -u sshd -n 20",
            "journalctl -f",
            "systemctl --user status"
          ],
          practice: "Practice managing services and interpreting service logs on your system."
        },
        {
          id: 4,
          title: "Network Configuration & Troubleshooting",
          content: `
            Master network administration for production environments.

            ## Network Information:
            - \`ip addr show\` - Show network interfaces
            - \`ip route show\` - Show routing table
            - \`netstat -tlnp\` - Show listening ports
            - \`ss -tlnp\` - Modern replacement for netstat
            - \`lsof -i :80\` - Show processes using port 80

            ## Network Testing:
            - \`ping host\` - Test connectivity
            - \`traceroute host\` - Trace network path
            - \`nslookup domain\` - DNS lookup
            - \`dig domain\` - Advanced DNS lookup
            - \`curl -I url\` - Test HTTP response

            ## Firewall Management (iptables/firewalld):
            - \`iptables -L\` - List firewall rules
            - \`firewall-cmd --list-all\` - Show firewall status
            - \`firewall-cmd --add-port=80/tcp --permanent\` - Open port
            - \`firewall-cmd --reload\` - Reload firewall

            ## Real-World Scenario: Cannot Connect to Database
            **Problem**: Application cannot connect to database server
            **Troubleshooting Steps**:
            1. \`ping db-server\` - Test basic connectivity
            2. \`telnet db-server 3306\` - Test port accessibility
            3. \`ss -tlnp | grep 3306\` - Check if DB is listening
            4. \`iptables -L | grep 3306\` - Check firewall rules
            5. \`journalctl -u mysql\` - Check database logs

            ## Network Configuration Files:
            - \`/etc/hosts\` - Local host resolution
            - \`/etc/resolv.conf\` - DNS servers
            - \`/etc/sysconfig/network-scripts/\` - Network interfaces (RHEL/CentOS)
            - \`/etc/netplan/\` - Network config (Ubuntu 18+)

            ## Bandwidth and Performance:
            - \`iftop\` - Monitor network traffic by connection
            - \`nethogs\` - Monitor network usage by process
            - \`iperf3 -s\` - Network performance testing server
            - \`iperf3 -c server\` - Network performance testing client
          `,
          commands: [
            "ip addr show",
            "ip route show",
            "ss -tlnp",
            "netstat -tlnp | grep :22",
            "ping -c 4 google.com",
            "dig google.com",
            "curl -I http://google.com"
          ],
          practice: "Diagnose network connectivity issues and understand your system's network configuration."
        },
        {
          id: 5,
          title: "Package Management & Updates",
          content: `
            Master package management for different Linux distributions.

            ## Ubuntu/Debian (APT):
            - \`apt update\` - Update package lists
            - \`apt upgrade\` - Upgrade installed packages
            - \`apt install package\` - Install package
            - \`apt remove package\` - Remove package
            - \`apt search keyword\` - Search packages
            - \`apt list --installed\` - List installed packages
            - \`apt autoremove\` - Remove unnecessary packages

            ## RHEL/CentOS/Fedora (YUM/DNF):
            - \`yum update\` or \`dnf update\` - Update packages
            - \`yum install package\` or \`dnf install package\` - Install
            - \`yum remove package\` or \`dnf remove package\` - Remove
            - \`yum search keyword\` or \`dnf search keyword\` - Search
            - \`yum list installed\` or \`dnf list installed\` - List installed

            ## Real-World Scenario: Security Patch Deployment
            **Situation**: Critical security vulnerability needs patching
            **Production-Safe Update Process**:

            1. **Pre-Patch Preparation**:
               - \`apt list --upgradable\` - Check available updates
               - \`dpkg -l > /backup/packages-before.txt\` - Backup package list
               - Create system snapshot/backup
               - Schedule maintenance window

            2. **Testing Environment First**:
               - Test updates on staging server
               - Verify application functionality
               - Document any issues

            3. **Production Deployment**:
               - \`apt update && apt upgrade -y\` - Apply updates
               - \`systemctl status\` - Check critical services
               - Monitor application logs
               - Verify functionality

            4. **Rollback Plan**:
               - Keep previous kernel available
               - Have system restore procedure ready
               - Document rollback steps

            ## Kernel Management:
            - \`uname -r\` - Current kernel version
            - \`apt list --installed | grep linux-image\` - Installed kernels
            - \`grub-reboot 'Ubuntu, with Linux X.X.X'\` - Boot specific kernel
            - \`apt autoremove --purge\` - Remove old kernels

            ## Repository Management:
            - \`add-apt-repository ppa:repo/name\` - Add PPA
            - \`apt-key add key.gpg\` - Add repository key
            - Edit \`/etc/apt/sources.list\` - Configure repositories
          `,
          commands: [
            "apt update",
            "apt list --upgradable",
            "apt list --installed | head -20",
            "uname -r",
            "apt search nginx",
            "dpkg -l | grep ssh"
          ],
          practice: "Practice safe package management and understand the update process for your distribution."
        }
      ]
    },
    {
      id: 3,
      title: "Linux Command Line Mastery",
      description: "Master the Linux command line interface",
      lessons: [
        {
          id: 1,
          title: "Shell Scripting Basics",
          content: `
            Automate tasks and create powerful scripts with shell scripting.

            ## What is Shell Scripting?
            Shell scripts are text files containing sequences of commands that the shell can execute.

            ## Creating Your First Script:
            1. Create a file with .sh extension
            2. Add shebang line: \`#!/bin/bash\`
            3. Add your commands
            4. Make executable: \`chmod +x script.sh\`
            5. Run: \`./script.sh\`

            ## Basic Script Structure:
            \`\`\`bash
            #!/bin/bash
            # This is a comment
            echo "Hello, World!"
            echo "Current date: $(date)"
            \`\`\`

            ## Variables:
            \`\`\`bash
            name="Linux User"
            echo "Hello, $name"
            echo "Hello, \${name}"
            \`\`\`

            ## Command Substitution:
            - \`$(command)\` - Modern syntax
            - \`\`command\`\` - Traditional syntax
          `,
          commands: [
            "echo '#!/bin/bash' > myscript.sh",
            "echo 'echo \"Hello World\"' >> myscript.sh",
            "chmod +x myscript.sh",
            "./myscript.sh"
          ],
          practice: "Create and run your first shell script that displays system information."
        },
        {
          id: 2,
          title: "Text Processing & Log Analysis",
          content: `
            Master text processing for real-world log analysis and data manipulation.

            ## Essential Text Tools:
            - \`grep\` - Search text patterns
            - \`sed\` - Stream editor for text manipulation
            - \`awk\` - Pattern scanning and processing
            - \`sort\` - Sort lines of text
            - \`uniq\` - Report or omit repeated lines
            - \`cut\` - Extract columns from text
            - \`wc\` - Word, line, character, and byte count

            ## Real-World Scenario: Apache Log Analysis
            **Situation**: Analyze web server logs for security and performance

            ### Common Log Analysis Tasks:

            1. **Find Most Frequent IP Addresses**:
               \`awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -10\`

            2. **Identify 404 Errors**:
               \`grep " 404 " access.log | awk '{print $7}' | sort | uniq -c | sort -nr\`

            3. **Monitor Failed Login Attempts**:
               \`grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -nr\`

            4. **Extract IPs with Suspicious Activity**:
               \`awk '$9 ~ /^4|^5/ {print $1}' access.log | sort | uniq -c | sort -nr | head -20\`

            ## Advanced grep Patterns:
            - \`grep -i pattern file\` - Case insensitive
            - \`grep -r pattern directory\` - Recursive search
            - \`grep -E 'pattern1|pattern2' file\` - Multiple patterns
            - \`grep -v pattern file\` - Invert match (exclude)
            - \`grep -A 5 -B 5 pattern file\` - Show context lines

            ## sed for Text Manipulation:
            - \`sed 's/old/new/g' file\` - Replace all occurrences
            - \`sed -i 's/old/new/g' file\` - Edit file in place
            - \`sed -n '1,10p' file\` - Print lines 1-10
            - \`sed '/pattern/d' file\` - Delete lines matching pattern

            ## awk for Complex Processing:
            - \`awk '{print $1, $3}' file\` - Print specific columns
            - \`awk '$3 > 100 {print $1, $3}' file\` - Conditional printing
            - \`awk 'BEGIN {sum=0} {sum+=$3} END {print "Total:", sum}' file\` - Sum column

            ## Real-World Script: Security Log Monitor
            \`\`\`bash
            #!/bin/bash
            # Monitor for suspicious activities
            LOGFILE="/var/log/auth.log"
            EMAIL="admin@company.com"
            
            # Check for failed SSH attempts
            FAILED_ATTEMPTS=$(grep "Failed password" $LOGFILE | grep "$(date '+%b %d')" | wc -l)
            
            if [ $FAILED_ATTEMPTS -gt 10 ]; then
                echo "Alert: $FAILED_ATTEMPTS failed SSH attempts today" | mail -s "Security Alert" $EMAIL
            fi
            \`\`\`
          `,
          commands: [
            "grep -i error /var/log/syslog | head -5",
            "ps aux | grep -v grep | grep ssh",
            "cat /etc/passwd | cut -d: -f1,7",
            "cat /etc/passwd | awk -F: '{print $1, $7}'",
            "echo 'test line' | sed 's/test/production/'",
            "ls -la | awk '{total += $5} END {print \"Total size:\", total}'"
          ],
          practice: "Practice analyzing system logs and extracting meaningful information using text processing tools."
        },
        {
          id: 3,
          title: "File Permissions & Security",
          content: `
            Master Linux file permissions for secure system administration.

            ## Understanding Permissions:
            Linux uses a 3-tier permission system: **Owner**, **Group**, **Others**
            Each tier has three permissions: **Read (r)**, **Write (w)**, **Execute (x)**

            ## Permission Representation:
            - **Symbolic**: \`rwxrw-r--\` (Owner: rwx, Group: rw-, Others: r--)
            - **Octal**: \`764\` (Owner: 7, Group: 6, Others: 4)

            ## Octal Values:
            - **4** = Read (r)
            - **2** = Write (w)
            - **1** = Execute (x)
            - **0** = No permission

            ## chmod Commands:
            - \`chmod 755 file\` - rwxr-xr-x (common for executables)
            - \`chmod 644 file\` - rw-r--r-- (common for files)
            - \`chmod 600 file\` - rw------- (private files)
            - \`chmod +x file\` - Add execute permission
            - \`chmod -w file\` - Remove write permission
            - \`chmod u+x,g-w file\` - Complex permission changes

            ## Ownership Commands:
            - \`chown user file\` - Change owner
            - \`chown user:group file\` - Change owner and group
            - \`chgrp group file\` - Change group only
            - \`chown -R user:group directory\` - Recursive ownership change

            ## Special Permissions:
            - **Setuid (4000)**: \`chmod 4755 file\` - Run as file owner
            - **Setgid (2000)**: \`chmod 2755 dir\` - New files inherit group
            - **Sticky bit (1000)**: \`chmod 1755 dir\` - Only owner can delete files

            ## Real-World Scenario: Securing Web Server Files
            **Situation**: Set up secure permissions for a web application

            \`\`\`bash
            # Web root directory structure
            /var/www/html/
            ├── index.php (644 - read by web server)
            ├── config/ (750 - restricted access)
            │   └── database.conf (600 - owner read only)
            ├── uploads/ (755 - web server can write)
            └── logs/ (750 - admin access only)
            
            # Secure setup commands:
            chown -R www-data:www-data /var/www/html/
            chmod -R 644 /var/www/html/
            chmod -R 755 /var/www/html/uploads/
            chmod 600 /var/www/html/config/database.conf
            chmod 750 /var/www/html/config/
            \`\`\`

            ## Security Best Practices:
            1. **Principle of Least Privilege**: Give minimum necessary permissions
            2. **Regular Audits**: \`find / -perm -4000 -type f 2>/dev/null\` (find setuid files)
            3. **Monitor Changes**: \`find /etc -newer /var/log/install.log\` (recently changed files)
            4. **Umask Settings**: Set default permissions for new files

            ## File Attributes (Extended):
            - \`lsattr file\` - List file attributes
            - \`chattr +i file\` - Make file immutable
            - \`chattr -i file\` - Remove immutable flag
            - \`chattr +a file\` - Append-only mode

            ## Access Control Lists (ACL):
            - \`getfacl file\` - Show ACL permissions
            - \`setfacl -m u:username:rwx file\` - Set user ACL
            - \`setfacl -m g:groupname:rx file\` - Set group ACL
            - \`setfacl -x u:username file\` - Remove user ACL
          `,
          commands: [
            "ls -la /etc/passwd",
            "stat /etc/passwd",
            "umask",
            "find /tmp -type f -perm 644",
            "find /usr/bin -perm -4000 -type f",
            "chmod 755 /tmp/testfile 2>/dev/null || echo 'Demo command'"
          ],
          practice: "Practice setting secure file permissions and understanding the security implications of different permission levels."
        },
        {
          id: 4,
          title: "Environment Variables & Configuration",
          content: `
            Master environment variables and system configuration for professional administration.

            ## Environment Variables Basics:
            - \`env\` - Display all environment variables
            - \`printenv\` - Alternative to env
            - \`echo $VARIABLE\` - Display specific variable
            - \`export VARIABLE=value\` - Set environment variable
            - \`unset VARIABLE\` - Remove environment variable

            ## Important System Variables:
            - **PATH** - Executable search paths
            - **HOME** - User's home directory
            - **USER** - Current username
            - **SHELL** - Default shell
            - **PWD** - Current working directory
            - **LANG** - System language
            - **TZ** - Timezone

            ## Configuration Files:
            - **System-wide**: \`/etc/environment\`, \`/etc/profile\`
            - **User-specific**: \`~/.bashrc\`, \`~/.bash_profile\`, \`~/.profile\`
            - **Shell-specific**: \`~/.zshrc\` (zsh), \`~/.fishrc\` (fish)

            ## Real-World Scenario: Application Deployment
            **Situation**: Deploy a Node.js application with proper environment configuration

            ### 1. Production Environment Setup:
            \`\`\`bash
            # /etc/environment
            NODE_ENV=production
            APP_PORT=3000
            DB_HOST=localhost
            DB_PORT=5432
            LOG_LEVEL=info
            \`\`\`

            ### 2. Application-Specific Config:
            \`\`\`bash
            # /opt/myapp/.env
            DATABASE_URL=postgresql://user:pass@localhost:5432/myapp
            REDIS_URL=redis://localhost:6379
            SECRET_KEY=your-secret-key
            API_BASE_URL=https://api.myapp.com
            \`\`\`

            ### 3. Systemd Service with Environment:
            \`\`\`bash
            # /etc/systemd/system/myapp.service
            [Unit]
            Description=My Node.js App
            After=network.target

            [Service]
            Type=simple
            User=myapp
            WorkingDirectory=/opt/myapp
            Environment=NODE_ENV=production
            EnvironmentFile=/opt/myapp/.env
            ExecStart=/usr/bin/node server.js
            Restart=always

            [Install]
            WantedBy=multi-user.target
            \`\`\`

            ## PATH Management:
            - \`echo $PATH\` - Show current PATH
            - \`export PATH=$PATH:/new/directory\` - Add to PATH temporarily
            - \`which command\` - Find command location
            - \`type command\` - Show command type and location

            ## Aliases and Functions:
            \`\`\`bash
            # Useful aliases in ~/.bashrc
            alias ll='ls -la'
            alias la='ls -A'
            alias l='ls -CF'
            alias grep='grep --color=auto'
            alias ..='cd ..'
            alias ...='cd ../..'

            # Custom functions
            mkcd() {
                mkdir -p "$1" && cd "$1"
            }

            extract() {
                case $1 in
                    *.tar.bz2) tar xjf $1 ;;
                    *.tar.gz) tar xzf $1 ;;
                    *.zip) unzip $1 ;;
                    *) echo "Unknown archive format" ;;
                esac
            }
            \`\`\`

            ## Shell Customization:
            \`\`\`bash
            # ~/.bashrc customization
            # Custom prompt
            PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '

            # History settings
            HISTSIZE=10000
            HISTFILESIZE=20000
            HISTCONTROL=ignoredups:ignorespace

            # Auto-completion
            if [ -f /etc/bash_completion ]; then
                . /etc/bash_completion
            fi
            \`\`\`

            ## Configuration Management Best Practices:
            1. **Version Control**: Keep config files in git
            2. **Environment Separation**: Different configs for dev/staging/prod
            3. **Secret Management**: Use secret management systems
            4. **Documentation**: Document all environment variables
            5. **Validation**: Script to validate configuration
          `,
          commands: [
            "echo $PATH",
            "printenv | grep -E '^(PATH|HOME|USER)'",
            "export TEST_VAR='Hello World'",
            "echo $TEST_VAR",
            "which bash",
            "type ls"
          ],
          practice: "Practice managing environment variables and customizing your shell environment for productivity."
        },
        {
          id: 5,
          title: "Advanced Pipes & Redirection",
          content: `
            Master advanced command chaining and data flow for complex system administration tasks.

            ## Basic Redirection:
            - \`command > file\` - Redirect stdout to file (overwrite)
            - \`command >> file\` - Redirect stdout to file (append)
            - \`command < file\` - Use file as stdin
            - \`command 2> file\` - Redirect stderr to file
            - \`command &> file\` - Redirect both stdout and stderr
            - \`command 2>&1\` - Redirect stderr to stdout

            ## Pipes and Command Chaining:
            - \`command1 | command2\` - Pipe stdout of command1 to stdin of command2
            - \`command1 && command2\` - Run command2 only if command1 succeeds
            - \`command1 || command2\` - Run command2 only if command1 fails
            - \`command1 ; command2\` - Run commands sequentially

            ## Advanced Piping Techniques:
            - \`tee\` - Write output to both file and stdout
            - \`xargs\` - Build and execute commands from standard input
            - \`parallel\` - Run commands in parallel

            ## Real-World Scenario: System Monitoring Pipeline
            **Situation**: Create comprehensive system monitoring reports

            ### 1. CPU and Memory Usage Report:
            \`\`\`bash
            # Generate detailed system report
            {
                echo "=== System Report Generated: $(date) ==="
                echo ""
                echo "=== CPU Information ==="
                lscpu | grep -E '^(CPU|Model|Core|Thread)'
                echo ""
                echo "=== Memory Usage ==="
                free -h
                echo ""
                echo "=== Disk Usage ==="
                df -h | grep -E '^(/dev/|Filesystem)'
                echo ""
                echo "=== Top 10 CPU Processes ==="
                ps aux --sort=-%cpu | head -11
                echo ""
                echo "=== Top 10 Memory Processes ==="
                ps aux --sort=-%mem | head -11
            } | tee /var/log/system-report-$(date +%Y%m%d).log
            \`\`\`

            ### 2. Log Analysis Pipeline:
            \`\`\`bash
            # Analyze web server logs for security issues
            cat /var/log/apache2/access.log | \\
                grep "$(date '+%d/%b/%Y')" | \\
                awk '$9 ~ /^4|^5/ {print $1, $7, $9}' | \\
                sort | uniq -c | sort -nr | \\
                head -20 | \\
                tee /tmp/error_analysis.txt
            \`\`\`

            ### 3. Bulk File Operations:
            \`\`\`bash
            # Find and process large files
            find /var/log -name "*.log" -size +100M -print0 | \\
                xargs -0 ls -lh | \\
                sort -k5 -hr | \\
                head -10
            
            # Compress old log files
            find /var/log -name "*.log" -mtime +30 -print0 | \\
                xargs -0 -I {} gzip {}
            
            # Parallel processing example
            find /home -name "*.jpg" -print0 | \\
                parallel -0 convert {} {.}_thumb.jpg
            \`\`\`

            ## Advanced xargs Usage:
            - \`find . -name "*.tmp" | xargs rm\` - Delete multiple files
            - \`cat urls.txt | xargs -I {} curl -o {}.html {}\` - Download multiple URLs
            - \`echo "file1 file2 file3" | xargs -n 1 touch\` - Process one item at a time
            - \`ps aux | grep chrome | awk '{print $2}' | xargs kill\` - Kill multiple processes

            ## Process Substitution:
            - \`diff <(command1) <(command2)\` - Compare command outputs
            - \`grep pattern <(cat file1 file2)\` - Use command output as file input
            - \`tee >(command1) >(command2) < input\` - Send output to multiple commands

            ## Real-World Script: Automated Backup with Logging:
            \`\`\`bash
            #!/bin/bash
            BACKUP_DIR="/backup"
            SOURCE_DIR="/home"
            LOG_FILE="/var/log/backup.log"
            
            {
                echo "Backup started: $(date)"
                
                # Create backup with progress
                tar czf "$BACKUP_DIR/home-backup-$(date +%Y%m%d).tar.gz" \\
                    -C "$SOURCE_DIR" . 2>&1 | \\
                    tee >(grep -c "^tar:" > /tmp/error_count.txt)
                
                echo "Backup completed: $(date)"
                echo "Errors: $(cat /tmp/error_count.txt)"
                
                # Clean old backups (keep last 7 days)
                find "$BACKUP_DIR" -name "home-backup-*.tar.gz" \\
                    -mtime +7 -delete
                    
            } | tee -a "$LOG_FILE"
            \`\`\`

            ## Named Pipes (FIFOs):
            - \`mkfifo mypipe\` - Create named pipe
            - \`command1 > mypipe &\` - Write to pipe in background
            - \`command2 < mypipe\` - Read from pipe

            ## Performance Considerations:
            - Use \`pv\` for progress monitoring: \`pv file | command\`
            - Buffer with \`mbuffer\`: \`command1 | mbuffer -m 100M | command2\`
            - Monitor pipe performance: \`iostat -x 1\`
          `,
          commands: [
            "ps aux | grep -v grep | wc -l",
            "ls -la | grep '^d' | wc -l",
            "cat /etc/passwd | cut -d: -f1 | sort | head -10",
            "find /tmp -type f 2>/dev/null | head -5",
            "echo 'file1 file2 file3' | xargs -n 1 echo 'Processing:'",
            "date | tee /tmp/timestamp.txt"
          ],
          practice: "Create complex command pipelines to automate system administration tasks and data processing."
        }
      ]
    },
    {
      id: 4,
      title: "Production Server Deployment",
      description: "Real-world server deployment, monitoring, and maintenance",
      lessons: [
        {
          id: 1,
          title: "Web Server Setup & Configuration",
          content: `
            Master production web server deployment with Nginx and Apache.

            ## Nginx Configuration:
            
            ### Basic Nginx Setup:
            - \`apt install nginx\` - Install Nginx
            - \`systemctl start nginx\` - Start Nginx
            - \`systemctl enable nginx\` - Enable auto-start
            - \`nginx -t\` - Test configuration
            - \`systemctl reload nginx\` - Reload configuration

            ## Real-World Scenario: Deploy Node.js Application
            **Situation**: Deploy a Node.js app with SSL, load balancing, and monitoring

            ### Performance Optimization:
            - **Enable Gzip compression**
            - **Set proper cache headers**
            - **Optimize worker processes**
            - **Configure connection limits**
            - **Use CDN for static assets**

            ## Security Best Practices:
            - **Hide server version**: \`server_tokens off;\`
            - **Rate limiting**: Prevent abuse
            - **Security headers**: XSS, CSRF protection
            - **Firewall rules**: Only allow necessary ports
            - **Regular updates**: Keep software current
          `,
          commands: [
            "nginx -v",
            "nginx -t",
            "systemctl status nginx",
            "curl -I http://localhost",
            "ss -tlnp | grep :80",
            "ls -la /etc/nginx/sites-available/"
          ],
          practice: "Set up a basic Nginx server and configure a simple website with proper security headers."
        },
        {
          id: 2,
          title: "Database Deployment & Management",
          content: `
            Master database deployment, backup, and maintenance for production environments.

            ## MySQL/MariaDB Production Setup:

            ### Installation and Security:
            \`\`\`bash
            # Install MySQL
            apt install mysql-server mysql-client
            
            # Secure installation
            mysql_secure_installation
            # - Set root password
            # - Remove anonymous users
            # - Disable remote root login
            # - Remove test database
            \`\`\`

            ## Real-World Scenario: E-commerce Database Setup
            **Situation**: Deploy production database for online store

            ### Database Backup Strategy:
            \`\`\`bash
            #!/bin/bash
            # /opt/scripts/mysql_backup.sh
            
            DB_NAME="ecommerce_prod"
            BACKUP_DIR="/backup/mysql"
            DATE=$(date +%Y%m%d_%H%M%S)
            
            # Perform backup
            mysqldump --single-transaction --routines --triggers \\
                --user=backup_user --password=BackupPass456! \\
                \$DB_NAME | gzip > \$BACKUP_DIR/\${DB_NAME}_\$DATE.sql.gz
            \`\`\`

            ## Performance Tuning:
            - **Index optimization**: Regular ANALYZE/OPTIMIZE
            - **Query optimization**: Use EXPLAIN
            - **Connection pooling**: Implement connection pools
            - **Partitioning**: For large tables
            - **Replication**: Master-slave setup for read scaling

            ## Security Best Practices:
            - **Regular updates**: Keep database software current
            - **Firewall rules**: Restrict database access
            - **SSL connections**: Encrypt data in transit
            - **Regular backups**: Test restore procedures
            - **Access auditing**: Monitor database access
          `,
          commands: [
            "systemctl status mysql",
            "mysql --version",
            "mysqladmin -u root status 2>/dev/null || echo 'Demo command'",
            "ps aux | grep mysql",
            "ss -tlnp | grep :3306",
            "ls -la /etc/mysql/ 2>/dev/null || echo 'MySQL config not found'"
          ],
          practice: "Set up a basic database instance and practice backup/restore procedures."
        },
        {
          id: 3,
          title: "Server Monitoring & Alerting",
          content: `
            Implement comprehensive server monitoring and alerting systems.

            ## System Resource Monitoring:

            ### CPU, Memory, and Disk Monitoring:
            \`\`\`bash
            # Basic system stats
            top -bn1 | head -20
            free -h
            df -h
            iostat -x 1 3
            sar -u 1 3
            \`\`\`

            ### Advanced Monitoring Tools:
            - **htop** - Interactive process viewer
            - **iotop** - I/O monitoring by process
            - **nethogs** - Network usage by process
            - **glances** - All-in-one monitoring tool
            - **nmon** - System performance monitor

            ## Real-World Monitoring Setup:

            ### Custom Monitoring Script:
            \`\`\`bash
            #!/bin/bash
            # System monitoring script
            
            ALERT_EMAIL="admin@company.com"
            CPU_THRESHOLD=80
            MEMORY_THRESHOLD=85
            DISK_THRESHOLD=90
            
            # Check CPU usage
            CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
            if [ \${CPU_USAGE%.*} -gt $CPU_THRESHOLD ]; then
                echo "High CPU usage: \${CPU_USAGE}%" | mail -s "CPU Alert" $ALERT_EMAIL
            fi
            \`\`\`

            ## Application-Specific Monitoring:

            ### Web Application Health Check:
            \`\`\`bash
            #!/bin/bash
            # Monitor web application health
            
            WEBSITE_URL="https://myapp.com/health"
            HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$WEBSITE_URL")
            
            if [ "$HTTP_STATUS" != "200" ]; then
                echo "Website down. Status: $HTTP_STATUS" | mail -s "Website Alert" $ALERT_EMAIL
            fi
            \`\`\`

            ## Performance Baselines:
            - **CPU usage**: Normal < 70%, Alert > 80%
            - **Memory usage**: Normal < 80%, Alert > 90%
            - **Disk usage**: Normal < 85%, Alert > 90%
            - **Load average**: Should be < number of CPU cores
            - **Response time**: Web pages < 2 seconds
          `,
          commands: [
            "uptime",
            "free -m",
            "df -h",
            "ps aux --sort=-%cpu | head -5",
            "ss -tlnp | grep LISTEN",
            "systemctl list-units --failed"
          ],
          practice: "Set up basic monitoring scripts and practice identifying system performance issues."
        },
        {
          id: 4,
          title: "Security Hardening & Patching",
          content: `
            Implement comprehensive security measures and maintain system updates.

            ## System Hardening Checklist:

            ### SSH Security Configuration:
            \`\`\`bash
            # /etc/ssh/sshd_config
            PermitRootLogin no
            PubkeyAuthentication yes
            PasswordAuthentication no
            Port 2222
            MaxAuthTries 3
            \`\`\`

            ### Firewall Configuration (UFW):
            \`\`\`bash
            # Enable UFW
            ufw --force reset
            ufw default deny incoming
            ufw default allow outgoing
            
            # Allow specific services
            ufw allow 2222/tcp  # SSH on custom port
            ufw allow 80/tcp    # HTTP
            ufw allow 443/tcp   # HTTPS
            
            # Enable firewall
            ufw --force enable
            \`\`\`

            ## Real-World Security Incident Response:

            ### Scenario: Suspected Brute Force Attack
            **Detection and Response Procedure**:

            \`\`\`bash
            #!/bin/bash
            # Security incident response script
            
            # Check for brute force attacks
            SUSPICIOUS_IPS=$(grep "Failed password" /var/log/auth.log | \\
                grep "$(date '+%b %d')" | \\
                awk '{print $(NF-3)}' | sort | uniq -c | \\
                awk '$1 > 10 {print $2}')
            
            if [ ! -z "$SUSPICIOUS_IPS" ]; then
                # Block suspicious IPs
                for ip in $SUSPICIOUS_IPS; do
                    iptables -A INPUT -s $ip -j DROP
                done
            fi
            \`\`\`

            ## Automated Patching Strategy:

            ### Patch Management Script:
            \`\`\`bash
            #!/bin/bash
            # Automated patch management
            
            # Check for security updates
            apt update -qq
            SECURITY_UPDATES=$(apt list --upgradable 2>/dev/null | grep -c security)
            
            if [ $SECURITY_UPDATES -gt 0 ]; then
                # Create backup
                tar -czf /backup/pre_patch_$(date +%Y%m%d).tar.gz /etc/
                
                # Apply updates
                DEBIAN_FRONTEND=noninteractive apt-get -y upgrade
                
                # Verify services
                systemctl status nginx mysql ssh
            fi
            \`\`\`

            ## Security Best Practices Summary:
            1. **Regular Updates**: Apply security patches promptly
            2. **Access Control**: Use strong authentication and authorization
            3. **Network Security**: Configure firewalls and network segmentation
            4. **Monitoring**: Implement comprehensive logging and alerting
            5. **Backup Strategy**: Regular backups with tested restore procedures
            6. **Incident Response**: Have documented procedures for security incidents
          `,
          commands: [
            "ufw status",
            "grep 'Failed password' /var/log/auth.log 2>/dev/null | tail -3 || echo 'No auth log found'",
            "find /etc -type f -perm -002 2>/dev/null | head -3",
            "lastlog | head -5",
            "who -a",
            "ss -tlnp | grep :22"
          ],
          practice: "Implement basic security hardening measures and practice incident response procedures."
        },
        {
          id: 5,
          title: "Backup & Disaster Recovery",
          content: `
            Implement comprehensive backup strategies and disaster recovery procedures.

            ## Backup Strategy Framework:

            ### 3-2-1 Backup Rule:
            - **3** copies of important data
            - **2** different storage media types
            - **1** offsite backup location

            ## Real-World Backup Implementation:

            ### Complete System Backup Script:
            \`\`\`bash
            #!/bin/bash
            # Comprehensive backup script
            
            BACKUP_ROOT="/backup"
            DATE=$(date +%Y%m%d_%H%M%S)
            LOG_FILE="/var/log/backup.log"
            
            # Directories to backup
            BACKUP_DIRS=("/etc" "/home" "/var/www" "/opt")
            
            # Database backup
            for db in production_db analytics_db; do
                mysqldump --single-transaction \$db | \\
                    gzip > "\$BACKUP_ROOT/db_\${db}_\$DATE.sql.gz"
            done
            
            # File system backup using rsync
            for dir in "\${BACKUP_DIRS[@]}"; do
                rsync -av --delete \\
                    "\$dir/" "\$BACKUP_ROOT/files/\$(basename \$dir)/"
            done
            
            # Sync to remote location
            rsync -avz "\$BACKUP_ROOT/" \\
                backup-server:/remote/backups/\$(hostname)/
            \`\`\`

            ## Disaster Recovery Procedures:

            ### System Restoration Script:
            \`\`\`bash
            #!/bin/bash
            # Disaster recovery restoration
            
            restore_database() {
                local DB_NAME="\$1"
                local BACKUP_FILE="\$2"
                
                mysql -e "CREATE DATABASE IF NOT EXISTS \$DB_NAME;"
                gunzip -c "\$BACKUP_FILE" | mysql "\$DB_NAME"
            }
            
            restore_files() {
                local BACKUP_DIR="$1"
                local TARGET_DIR="$2"
                
                rsync -av "$BACKUP_DIR/" "$TARGET_DIR/"
            }
            
            # Usage: ./restore.sh database production_db backup.sql.gz
            # Usage: ./restore.sh files /backup/etc/ /etc/
            \`\`\`

            ## Cloud Backup Integration:

            ### AWS S3 Backup:
            \`\`\`bash
            # Sync to AWS S3
            aws s3 sync /backup s3://company-backups/$(hostname)/ \\
                --delete \\
                --storage-class STANDARD_IA
            \`\`\`

            ## Testing and Validation:

            ### Backup Testing Script:
            \`\`\`bash
            #!/bin/bash
            # Test backup integrity
            
            # Test database backup
            gunzip -t backup.sql.gz && echo "Database backup valid"
            
            # Test file backup
            tar -tzf backup.tar.gz >/dev/null && echo "File backup valid"
            
            # Test restoration to temporary location
            mkdir -p /tmp/restore_test
            tar -xzf backup.tar.gz -C /tmp/restore_test/
            \`\`\`

            ## Best Practices Summary:

            ### Backup Strategy:
            1. **Regular Schedule**: Daily incremental, weekly full backups
            2. **Multiple Locations**: Local, remote, and cloud storage
            3. **Encryption**: Encrypt sensitive backup data
            4. **Testing**: Regular restoration testing
            5. **Documentation**: Clear recovery procedures
            6. **Monitoring**: Alert on backup failures
            7. **Retention**: Appropriate data retention policies

            ### Recovery Planning:
            1. **RTO (Recovery Time Objective)**: Target recovery time
            2. **RPO (Recovery Point Objective)**: Acceptable data loss
            3. **Priority Systems**: Critical system recovery order
            4. **Communication Plan**: Incident communication procedures
            5. **Testing Schedule**: Regular DR testing exercises
          `,
          commands: [
            "df -h /backup 2>/dev/null || echo 'Backup directory not found'",
            "ls -la /etc/cron.d/ 2>/dev/null || echo 'No cron jobs'",
            "tar --version",
            "rsync --version",
            "mysqldump --version 2>/dev/null || echo 'MySQL not installed'",
            "aws --version 2>/dev/null || echo 'AWS CLI not installed'"
          ],
          practice: "Design and implement a basic backup strategy for a test system, including testing restoration procedures."
        }
      ]
    },
    {
      id: 5,
      title: "DevOps & CI/CD Pipeline",
      description: "Build and manage continuous integration and deployment pipelines",
      lessons: [
        {
          id: 1,
          title: "Git & Version Control Mastery",
          content: `
            Master Git workflows for professional software development teams.

            ## Advanced Git Operations:

            ### Branch Management Strategy:
            \`\`\`bash
            # Create feature branch from develop
            git checkout develop
            git pull origin develop
            git checkout -b feature/user-authentication
            
            # Work on feature
            git add .
            git commit -m "feat: implement user authentication system"
            
            # Keep feature branch updated
            git checkout develop
            git pull origin develop
            git checkout feature/user-authentication
            git rebase develop
            \`\`\`

            ## Real-World Scenario: Code Review Process
            
            Your team uses a Git workflow where feature branches must be reviewed before merging.

            ### Pull Request Workflow:
            \`\`\`bash
            # Push feature branch for review
            git push origin feature/user-authentication
            
            # After review feedback, make changes
            git add .
            git commit -m "fix: address security review comments"
            git push origin feature/user-authentication
            
            # Squash commits before merge
            git rebase -i HEAD~3
            \`\`\`

            ## Git Hooks for Quality Control:

            ### Pre-commit Hook:
            \`\`\`bash
            #!/bin/bash
            # .git/hooks/pre-commit
            
            # Run tests before commit
            npm test
            if [ \$? -ne 0 ]; then
                echo "Tests failed. Commit aborted."
                exit 1
            fi
            
            # Run linting
            npm run lint
            if [ \$? -ne 0 ]; then
                echo "Linting failed. Commit aborted."
                exit 1
            fi
            \`\`\`

            ## Release Management:
            - **Semantic versioning**: MAJOR.MINOR.PATCH
            - **Release branches**: For preparing releases
            - **Hotfix branches**: For critical production fixes
            - **Tagging**: Mark release points
          `,
          commands: [
            "git log --oneline --graph --all",
            "git branch -r",
            "git rebase -i HEAD~3",
            "git tag -a v1.0.0 -m 'Release version 1.0.0'"
          ],
          practice: "Set up a complete Git workflow for a team project including branch protection rules and automated testing."
        },
        {
          id: 2,
          title: "Docker Containerization",
          content: `
            Containerize applications for consistent deployment across environments.

            ## Real-World Scenario: Microservice Deployment
            
            You need to containerize a Node.js API service and PostgreSQL database.

            ### Application Dockerfile:
            \`\`\`dockerfile
            FROM node:18-alpine
            
            WORKDIR /app
            
            # Copy package files first for better caching
            COPY package*.json ./
            RUN npm ci --only=production
            
            # Copy application code
            COPY . .
            
            # Create non-root user
            RUN addgroup -g 1001 -S nodejs
            RUN adduser -S nextjs -u 1001
            USER nextjs
            
            EXPOSE 3000
            
            CMD ["npm", "start"]
            \`\`\`

            ### Multi-service Docker Compose:
            \`\`\`yaml
            version: '3.8'
            
            services:
              api:
                build: .
                ports:
                  - "3000:3000"
                environment:
                  - NODE_ENV=production
                  - DATABASE_URL=postgresql://api_user:secret@db:5432/apidb
                depends_on:
                  - db
                restart: unless-stopped
            
              db:
                image: postgres:15-alpine
                environment:
                  - POSTGRES_DB=apidb
                  - POSTGRES_USER=api_user
                  - POSTGRES_PASSWORD=secret
                volumes:
                  - postgres_data:/var/lib/postgresql/data
                  - ./init.sql:/docker-entrypoint-initdb.d/init.sql
                restart: unless-stopped
            
              nginx:
                image: nginx:alpine
                ports:
                  - "80:80"
                  - "443:443"
                volumes:
                  - ./nginx.conf:/etc/nginx/nginx.conf
                  - ./ssl:/etc/ssl/certs
                depends_on:
                  - api
                restart: unless-stopped
            
            volumes:
              postgres_data:
            \`\`\`

            ## Production Docker Best Practices:
            
            ### Health Checks:
            \`\`\`dockerfile
            HEALTHCHECK --interval=30s --timeout=3s --start-period=60s \\
              CMD curl -f http://localhost:3000/health || exit 1
            \`\`\`

            ### Security Scanning:
            \`\`\`bash
            # Scan for vulnerabilities
            docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
              aquasec/trivy image myapp:latest
            
            # Scan during build
            docker build --secret id=npm,src=.npmrc -t myapp:latest .
            \`\`\`

            ## Container Orchestration:
            - **Docker Swarm**: Built-in orchestration
            - **Kubernetes**: Enterprise-grade orchestration
            - **Load balancing**: Distribute traffic across containers
            - **Rolling updates**: Zero-downtime deployments
          `,
          commands: [
            "docker build -t myapp:latest .",
            "docker-compose up -d",
            "docker ps",
            "docker logs myapp",
            "docker exec -it myapp /bin/sh",
            "docker system prune -a"
          ],
          practice: "Containerize a full-stack application with database, implement health checks, and deploy using Docker Compose."
        },
        {
          id: 3,
          title: "Jenkins CI/CD Pipeline",
          content: `
            Implement automated build, test, and deployment pipelines using Jenkins.

            ## Real-World Scenario: E-commerce Application Pipeline
            
            Build a complete CI/CD pipeline for an e-commerce application with testing, security scanning, and deployment.

            ### Jenkinsfile Pipeline:
            \`\`\`groovy
            pipeline {
                agent any
                
                environment {
                    DOCKER_HUB = credentials('dockerhub-credentials')
                    SONAR_TOKEN = credentials('sonarqube-token')
                    DEPLOY_KEY = credentials('deploy-ssh-key')
                }
                
                stages {
                    stage('Checkout') {
                        steps {
                            checkout scm
                            script {
                                env.GIT_COMMIT_SHORT = sh(
                                    script: 'git rev-parse --short HEAD',
                                    returnStdout: true
                                ).trim()
                            }
                        }
                    }
                    
                    stage('Install Dependencies') {
                        steps {
                            sh 'npm ci'
                        }
                    }
                    
                    stage('Lint & Test') {
                        parallel {
                            stage('Lint') {
                                steps {
                                    sh 'npm run lint'
                                    publishHTML([
                                        allowMissing: false,
                                        alwaysLinkToLastBuild: true,
                                        keepAll: true,
                                        reportDir: 'lint-results',
                                        reportFiles: 'index.html',
                                        reportName: 'Lint Report'
                                    ])
                                }
                            }
                            stage('Unit Tests') {
                                steps {
                                    sh 'npm run test:unit'
                                    publishTestResults(
                                        testResultsPattern: 'test-results.xml'
                                    )
                                }
                            }
                            stage('Integration Tests') {
                                steps {
                                    sh 'docker-compose -f docker-compose.test.yml up --abort-on-container-exit'
                                    sh 'npm run test:integration'
                                }
                                post {
                                    always {
                                        sh 'docker-compose -f docker-compose.test.yml down'
                                    }
                                }
                            }
                        }
                    }
                    
                    stage('Security Scan') {
                        steps {
                            sh 'npm audit --audit-level high'
                            sh 'docker run --rm -v \$(pwd):/app securecodewarrior/docker-scanner'
                        }
                    }
                    
                    stage('Code Quality') {
                        steps {
                            withSonarQubeEnv('SonarQube') {
                                sh 'sonar-scanner'
                            }
                            timeout(time: 10, unit: 'MINUTES') {
                                waitForQualityGate abortPipeline: true
                            }
                        }
                    }
                    
                    stage('Build Docker Image') {
                        steps {
                            script {
                                def image = docker.build("ecommerce-app:\${env.GIT_COMMIT_SHORT}")
                                docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                                    image.push()
                                    image.push('latest')
                                }
                            }
                        }
                    }
                    
                    stage('Deploy to Staging') {
                        steps {
                            sshagent(['deploy-ssh-key']) {
                                sh '''
                                    ssh -o StrictHostKeyChecking=no ubuntu@staging-server \\
                                    "docker pull ecommerce-app:\${GIT_COMMIT_SHORT} && \\
                                     docker-compose -f /opt/staging/docker-compose.yml up -d"
                                '''
                            }
                        }
                    }
                    
                    stage('Smoke Tests') {
                        steps {
                            sh 'npm run test:smoke -- --env=staging'
                        }
                    }
                    
                    stage('Deploy to Production') {
                        when {
                            branch 'main'
                        }
                        steps {
                            input message: 'Deploy to production?', ok: 'Deploy'
                            sshagent(['deploy-ssh-key']) {
                                sh '''
                                    ssh -o StrictHostKeyChecking=no ubuntu@prod-server \\
                                    "docker pull ecommerce-app:\${GIT_COMMIT_SHORT} && \\
                                     docker-compose -f /opt/production/docker-compose.yml up -d"
                                '''
                            }
                        }
                    }
                }
                
                post {
                    always {
                        cleanWs()
                    }
                    failure {
                        emailext (
                            subject: "Pipeline Failed: \${env.JOB_NAME} - \${env.BUILD_NUMBER}",
                            body: "Build failed. Check console output.",
                            to: "\${env.CHANGE_AUTHOR_EMAIL}"
                        )
                    }
                    success {
                        slackSend (
                            channel: '#deployments',
                            message: "✅ Successfully deployed \${env.JOB_NAME} - \${env.BUILD_NUMBER}"
                        )
                    }
                }
            }
            \`\`\`

            ## Advanced Pipeline Features:
            - **Parallel execution**: Speed up builds with parallel stages
            - **Quality gates**: Automated quality checks
            - **Blue-green deployment**: Zero-downtime deployments
            - **Rollback strategies**: Quick recovery from failed deployments
            - **Environment promotion**: Controlled release progression
          `,
          commands: [
            "jenkins-cli build job-name",
            "docker run -p 8080:8080 jenkins/jenkins:lts",
            "jenkins-cli install-plugin pipeline-stage-view",
            "jenkins-cli list-jobs"
          ],
          practice: "Create a complete CI/CD pipeline for a web application including automated testing, security scanning, and multi-environment deployment."
        }
      ]
    },
    {
      id: 6,
      title: "Cloud Infrastructure & AWS",
      description: "Deploy and manage applications on AWS cloud infrastructure",
      lessons: [
        {
          id: 1,
          title: "AWS Infrastructure Setup",
          content: `
            Deploy scalable, secure applications on Amazon Web Services.

            ## Real-World Scenario: E-commerce Platform on AWS
            
            Deploy a high-availability e-commerce platform with auto-scaling, load balancing, and database clustering.

            ### Infrastructure as Code with Terraform:
            \`\`\`hcl
            # main.tf
            provider "aws" {
              region = var.aws_region
            }
            
            # VPC Configuration
            resource "aws_vpc" "main" {
              cidr_block           = "10.0.0.0/16"
              enable_dns_hostnames = true
              enable_dns_support   = true
              
              tags = {
                Name = "ecommerce-vpc"
              }
            }
            
            # Subnets
            resource "aws_subnet" "public" {
              count             = 2
              vpc_id            = aws_vpc.main.id
              cidr_block        = "10.0.\${count.index + 1}.0/24"
              availability_zone = data.aws_availability_zones.available.names[count.index]
              
              map_public_ip_on_launch = true
              
              tags = {
                Name = "public-subnet-\${count.index + 1}"
              }
            }
            
            resource "aws_subnet" "private" {
              count             = 2
              vpc_id            = aws_vpc.main.id
              cidr_block        = "10.0.\${count.index + 10}.0/24"
              availability_zone = data.aws_availability_zones.available.names[count.index]
              
              tags = {
                Name = "private-subnet-\${count.index + 1}"
              }
            }
            
            # Application Load Balancer
            resource "aws_lb" "main" {
              name               = "ecommerce-alb"
              internal           = false
              load_balancer_type = "application"
              security_groups    = [aws_security_group.alb.id]
              subnets           = aws_subnet.public[*].id
              
              enable_deletion_protection = false
            }
            
            # Auto Scaling Group
            resource "aws_autoscaling_group" "app" {
              name                = "ecommerce-asg"
              vpc_zone_identifier = aws_subnet.private[*].id
              target_group_arns   = [aws_lb_target_group.app.arn]
              health_check_type   = "ELB"
              
              min_size         = 2
              max_size         = 10
              desired_capacity = 3
              
              launch_template {
                id      = aws_launch_template.app.id
                version = "\$Latest"
              }
              
              tag {
                key                 = "Name"
                value               = "ecommerce-app"
                propagate_at_launch = true
              }
            }
            
            # RDS Database
            resource "aws_db_instance" "main" {
              identifier     = "ecommerce-db"
              engine         = "postgres"
              engine_version = "14.9"
              instance_class = "db.t3.medium"
              
              allocated_storage     = 100
              max_allocated_storage = 1000
              storage_type          = "gp2"
              storage_encrypted     = true
              
              db_name  = "ecommerce"
              username = "dbadmin"
              password = var.db_password
              
              vpc_security_group_ids = [aws_security_group.rds.id]
              db_subnet_group_name   = aws_db_subnet_group.main.name
              
              backup_retention_period = 7
              backup_window          = "03:00-04:00"
              maintenance_window     = "sun:04:00-sun:05:00"
              
              skip_final_snapshot = true
              deletion_protection = false
            }
            \`\`\`

            ### Auto Scaling Policies:
            \`\`\`bash
            # CloudWatch Alarms for Auto Scaling
            aws cloudwatch put-metric-alarm \\
              --alarm-name "HighCPU" \\
              --alarm-description "Scale up on high CPU" \\
              --metric-name CPUUtilization \\
              --namespace AWS/EC2 \\
              --statistic Average \\
              --period 300 \\
              --threshold 75 \\
              --comparison-operator GreaterThanThreshold \\
              --evaluation-periods 2
            
            # Create scaling policy
            aws autoscaling put-scaling-policy \\
              --auto-scaling-group-name ecommerce-asg \\
              --policy-name scale-up \\
              --scaling-adjustment 2 \\
              --adjustment-type ChangeInCapacity
            \`\`\`

            ## Application Deployment Strategy:

            ### Blue-Green Deployment Script:
            \`\`\`bash
            #!/bin/bash
            # blue-green-deploy.sh
            
            # Variables
            APPLICATION_NAME="ecommerce-app"
            NEW_VERSION="\$1"
            
            if [ -z "\$NEW_VERSION" ]; then
                echo "Usage: \$0 <version>"
                exit 1
            fi
            
            # Create new environment
            echo "Creating green environment..."
            aws ecs create-service \\
              --cluster production \\
              --service-name "\$APPLICATION_NAME-green" \\
              --task-definition "\$APPLICATION_NAME:\$NEW_VERSION" \\
              --desired-count 3 \\
              --load-balancers targetGroupArn=arn:aws:elasticloadbalancing:...,containerName=web,containerPort=80
            
            # Wait for green environment to be healthy
            echo "Waiting for green environment to be healthy..."
            aws ecs wait services-stable \\
              --cluster production \\
              --services "\$APPLICATION_NAME-green"
            
            # Switch traffic to green
            echo "Switching traffic to green environment..."
            aws elbv2 modify-listener \\
              --listener-arn "\$LISTENER_ARN" \\
              --default-actions Type=forward,TargetGroupArn="\$GREEN_TARGET_GROUP_ARN"
            
            # Monitor for 5 minutes
            echo "Monitoring green environment..."
            sleep 300
            
            # Check error rates
            ERROR_RATE=\$(aws logs filter-log-events \\
              --log-group-name "/aws/ecs/\$APPLICATION_NAME" \\
              --start-time \$(date -d '5 minutes ago' +%s)000 \\
              --filter-pattern 'ERROR' | jq '.events | length')
            
            if [ "\$ERROR_RATE" -gt 10 ]; then
                echo "High error rate detected. Rolling back..."
                # Rollback logic here
                exit 1
            fi
            
            # Delete blue environment
            echo "Deployment successful. Cleaning up blue environment..."
            aws ecs delete-service \\
              --cluster production \\
              --service "\$APPLICATION_NAME-blue" \\
              --force
            \`\`\`

            ## Cost Optimization:
            - **Reserved Instances**: Long-term cost savings
            - **Spot Instances**: For non-critical workloads
            - **Auto Scaling**: Match capacity to demand
            - **CloudWatch**: Monitor and optimize resources
            - **S3 Lifecycle**: Automated data archiving
          `,
          commands: [
            "aws configure",
            "terraform init",
            "terraform plan",
            "terraform apply",
            "aws ec2 describe-instances",
            "aws logs tail /aws/ec2/user-data --follow",
            "aws cloudformation list-stacks"
          ],
          practice: "Deploy a complete three-tier web application on AWS with high availability, auto-scaling, and proper security groups."
        },
        {
          id: 2,
          title: "Kubernetes Orchestration",
          content: `
            Deploy and manage containerized applications at scale using Kubernetes.

            ## Real-World Scenario: Microservices Platform
            
            Deploy a microservices e-commerce platform with service mesh, monitoring, and automated scaling.

            ### Application Manifests:

            #### Namespace and ConfigMap:
            \`\`\`yaml
            # namespace.yaml
            apiVersion: v1
            kind: Namespace
            metadata:
              name: ecommerce
              labels:
                name: ecommerce
            ---
            apiVersion: v1
            kind: ConfigMap
            metadata:
              name: app-config
              namespace: ecommerce
            data:
              DATABASE_HOST: "postgres-service.ecommerce.svc.cluster.local"
              REDIS_HOST: "redis-service.ecommerce.svc.cluster.local"
              LOG_LEVEL: "info"
              API_VERSION: "v1"
            \`\`\`

            #### User Service Deployment:
            \`\`\`yaml
            # user-service.yaml
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              name: user-service
              namespace: ecommerce
              labels:
                app: user-service
                version: v1
            spec:
              replicas: 3
              strategy:
                type: RollingUpdate
                rollingUpdate:
                  maxUnavailable: 1
                  maxSurge: 1
              selector:
                matchLabels:
                  app: user-service
              template:
                metadata:
                  labels:
                    app: user-service
                    version: v1
                spec:
                  containers:
                  - name: user-service
                    image: ecommerce/user-service:v1.2.3
                    ports:
                    - containerPort: 3000
                      name: http
                    env:
                    - name: NODE_ENV
                      value: "production"
                    - name: DATABASE_URL
                      valueFrom:
                        secretKeyRef:
                          name: db-credentials
                          key: url
                    envFrom:
                    - configMapRef:
                        name: app-config
                    resources:
                      requests:
                        memory: "256Mi"
                        cpu: "250m"
                      limits:
                        memory: "512Mi"
                        cpu: "500m"
                    livenessProbe:
                      httpGet:
                        path: /health
                        port: http
                      initialDelaySeconds: 30
                      periodSeconds: 10
                    readinessProbe:
                      httpGet:
                        path: /ready
                        port: http
                      initialDelaySeconds: 5
                      periodSeconds: 5
                    securityContext:
                      allowPrivilegeEscalation: false
                      runAsNonRoot: true
                      runAsUser: 1001
                      capabilities:
                        drop:
                        - ALL
            ---
            apiVersion: v1
            kind: Service
            metadata:
              name: user-service
              namespace: ecommerce
            spec:
              selector:
                app: user-service
              ports:
              - name: http
                port: 80
                targetPort: 3000
              type: ClusterIP
            \`\`\`

            #### Horizontal Pod Autoscaler:
            \`\`\`yaml
            # hpa.yaml
            apiVersion: autoscaling/v2
            kind: HorizontalPodAutoscaler
            metadata:
              name: user-service-hpa
              namespace: ecommerce
            spec:
              scaleTargetRef:
                apiVersion: apps/v1
                kind: Deployment
                name: user-service
              minReplicas: 3
              maxReplicas: 20
              metrics:
              - type: Resource
                resource:
                  name: cpu
                  target:
                    type: Utilization
                    averageUtilization: 70
              - type: Resource
                resource:
                  name: memory
                  target:
                    type: Utilization
                    averageUtilization: 80
              behavior:
                scaleDown:
                  stabilizationWindowSeconds: 300
                  policies:
                  - type: Percent
                    value: 10
                    periodSeconds: 60
                scaleUp:
                  stabilizationWindowSeconds: 60
                  policies:
                  - type: Percent
                    value: 50
                    periodSeconds: 60
            \`\`\`

            ### Service Mesh with Istio:

            #### Traffic Management:
            \`\`\`yaml
            # traffic-management.yaml
            apiVersion: networking.istio.io/v1beta1
            kind: VirtualService
            metadata:
              name: user-service-vs
              namespace: ecommerce
            spec:
              hosts:
              - user-service.ecommerce.svc.cluster.local
              http:
              - match:
                - headers:
                    canary:
                      exact: "true"
                route:
                - destination:
                    host: user-service.ecommerce.svc.cluster.local
                    subset: v2
                  weight: 100
              - route:
                - destination:
                    host: user-service.ecommerce.svc.cluster.local
                    subset: v1
                  weight: 90
                - destination:
                    host: user-service.ecommerce.svc.cluster.local
                    subset: v2
                  weight: 10
            ---
            apiVersion: networking.istio.io/v1beta1
            kind: DestinationRule
            metadata:
              name: user-service-dr
              namespace: ecommerce
            spec:
              host: user-service.ecommerce.svc.cluster.local
              trafficPolicy:
                connectionPool:
                  tcp:
                    maxConnections: 100
                  http:
                    http1MaxPendingRequests: 50
                    maxRequestsPerConnection: 10
                circuitBreaker:
                  consecutiveErrors: 3
                  interval: 30s
                  baseEjectionTime: 30s
              subsets:
              - name: v1
                labels:
                  version: v1
              - name: v2
                labels:
                  version: v2
            \`\`\`

            ### Advanced Deployment Strategies:

            #### Canary Deployment Script:
            \`\`\`bash
            #!/bin/bash
            # canary-deploy.sh
            
            SERVICE_NAME="user-service"
            NAMESPACE="ecommerce"
            NEW_VERSION="\$1"
            CANARY_PERCENTAGE="\$2"
            
            if [ -z "\$NEW_VERSION" ] || [ -z "\$CANARY_PERCENTAGE" ]; then
                echo "Usage: \$0 <new-version> <canary-percentage>"
                exit 1
            fi
            
            echo "Deploying canary version \$NEW_VERSION with \$CANARY_PERCENTAGE% traffic..."
            
            # Update deployment with new version
            kubectl set image deployment/\$SERVICE_NAME \\
                \$SERVICE_NAME=ecommerce/\$SERVICE_NAME:\$NEW_VERSION \\
                -n \$NAMESPACE
            
            # Wait for rollout
            kubectl rollout status deployment/\$SERVICE_NAME -n \$NAMESPACE
            
            # Update virtual service for canary traffic
            cat <<EOF | kubectl apply -f -
            apiVersion: networking.istio.io/v1beta1
            kind: VirtualService
            metadata:
              name: \$SERVICE_NAME-vs
              namespace: \$NAMESPACE
            spec:
              hosts:
              - \$SERVICE_NAME.\$NAMESPACE.svc.cluster.local
              http:
              - route:
                - destination:
                    host: \$SERVICE_NAME.\$NAMESPACE.svc.cluster.local
                    subset: stable
                  weight: \$((100 - CANARY_PERCENTAGE))
                - destination:
                    host: \$SERVICE_NAME.\$NAMESPACE.svc.cluster.local
                    subset: canary
                  weight: \$CANARY_PERCENTAGE
            EOF
            
            echo "Canary deployment complete. Monitor metrics and promote if successful."
            \`\`\`

            ## Monitoring and Observability:
            - **Prometheus**: Metrics collection and alerting
            - **Grafana**: Visualization and dashboards
            - **Jaeger**: Distributed tracing
            - **Fluentd**: Log aggregation
            - **Istio**: Service mesh observability
          `,
          commands: [
            "kubectl get pods -n ecommerce",
            "kubectl describe deployment user-service -n ecommerce",
            "kubectl logs -f deployment/user-service -n ecommerce",
            "kubectl top nodes",
            "kubectl rollout history deployment/user-service -n ecommerce",
            "istioctl proxy-status",
            "helm install prometheus prometheus-community/kube-prometheus-stack"
          ],
          practice: "Deploy a complete microservices application on Kubernetes with service mesh, auto-scaling, and monitoring."
        }
      ]
    },
    {
      id: 7,
      title: "Security & Compliance",
      description: "Implement enterprise-grade security measures and compliance frameworks",
      lessons: [
        {
          id: 1,
          title: "Advanced Security Hardening",
          content: `
            Implement comprehensive security measures for enterprise Linux systems.

            ## Real-World Scenario: PCI DSS Compliant Web Server
            
            Secure a web server handling credit card transactions to meet PCI DSS requirements.

            ### System Hardening Checklist:

            #### 1. Disable Unnecessary Services:
            \`\`\`bash
            # Audit running services
            systemctl list-unit-files --type=service --state=enabled
            
            # Disable unnecessary services
            systemctl disable bluetooth
            systemctl disable cups
            systemctl disable avahi-daemon
            systemctl disable NetworkManager-wait-online
            
            # Remove unused packages
            yum remove telnet rsh-server vsftpd
            \`\`\`

            #### 2. Kernel Security Parameters:
            \`\`\`bash
            # /etc/sysctl.d/99-security.conf
            
            # IP Spoofing protection
            net.ipv4.conf.default.rp_filter = 1
            net.ipv4.conf.all.rp_filter = 1
            
            # Ignore ICMP ping requests
            net.ipv4.icmp_echo_ignore_all = 1
            
            # Ignore ICMP redirects
            net.ipv4.conf.all.accept_redirects = 0
            net.ipv6.conf.all.accept_redirects = 0
            
            # Disable source packet routing
            net.ipv4.conf.all.accept_source_route = 0
            net.ipv6.conf.all.accept_source_route = 0
            
            # Log Martians
            net.ipv4.conf.all.log_martians = 1
            
            # Ignore send redirects
            net.ipv4.conf.all.send_redirects = 0
            
            # Disable core dumps
            kernel.core_pattern = |/bin/false
            
            # Hide kernel pointers
            kernel.kptr_restrict = 2
            
            # Apply settings
            sysctl -p /etc/sysctl.d/99-security.conf
            \`\`\`

            #### 3. Advanced Firewall Configuration:
            \`\`\`bash
            #!/bin/bash
            # advanced-firewall.sh
            
            # Flush existing rules
            iptables -F
            iptables -X
            iptables -t nat -F
            iptables -t nat -X
            iptables -t mangle -F
            iptables -t mangle -X
            
            # Set default policies
            iptables -P INPUT DROP
            iptables -P FORWARD DROP
            iptables -P OUTPUT ACCEPT
            
            # Allow loopback
            iptables -A INPUT -i lo -j ACCEPT
            iptables -A OUTPUT -o lo -j ACCEPT
            
            # Allow established connections
            iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
            
            # Rate limiting for SSH
            iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW \\
                -m recent --set --name SSH
            iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW \\
                -m recent --update --seconds 60 --hitcount 4 --name SSH -j DROP
            iptables -A INPUT -p tcp --dport 22 -j ACCEPT
            
            # Web server (with rate limiting)
            iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 50 -j DROP
            iptables -A INPUT -p tcp --dport 80 -j ACCEPT
            iptables -A INPUT -p tcp --dport 443 -m connlimit --connlimit-above 50 -j DROP
            iptables -A INPUT -p tcp --dport 443 -j ACCEPT
            
            # DDoS protection
            iptables -A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 3 -j ACCEPT
            iptables -A INPUT -p tcp --syn -j DROP
            
            # Block invalid packets
            iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
            
            # Save rules
            iptables-save > /etc/sysconfig/iptables
            \`\`\`

            ### Security Monitoring and Incident Response:

            #### Real-time Security Monitoring:
            \`\`\`bash
            #!/bin/bash
            # security-monitor.sh
            
            ALERT_EMAIL="security@company.com"
            LOG_FILE="/var/log/security-monitor.log"
            
            # Monitor failed login attempts
            check_failed_logins() {
                FAILED_LOGINS=\$(grep "Failed password" /var/log/auth.log | \\
                    grep "\$(date '+%b %d')" | wc -l)
                
                if [ \$FAILED_LOGINS -gt 10 ]; then
                    echo "\$(date): High number of failed logins: \$FAILED_LOGINS" >> \$LOG_FILE
                    echo "Security Alert: \$FAILED_LOGINS failed login attempts detected" | \\
                        mail -s "Security Alert" \$ALERT_EMAIL
                fi
            }
            
            # Monitor suspicious network connections
            check_suspicious_connections() {
                # Check for connections to known bad IPs
                SUSPICIOUS_IPS=\$(netstat -tn | grep ESTABLISHED | \\
                    grep -f /etc/security/bad-ips.txt)
                
                if [ ! -z "\$SUSPICIOUS_IPS" ]; then
                    echo "\$(date): Suspicious connections detected" >> \$LOG_FILE
                    echo "\$SUSPICIOUS_IPS" >> \$LOG_FILE
                    echo "Security Alert: Suspicious network connections" | \\
                        mail -s "Network Security Alert" \$ALERT_EMAIL
                fi
            }
            
            # Monitor file integrity
            check_file_integrity() {
                # Run AIDE (Advanced Intrusion Detection Environment)
                if [ -f /var/lib/aide/aide.db ]; then
                    aide --check --config=/etc/aide/aide.conf > /tmp/aide-check.log 2>&1
                    
                    if [ \$? -ne 0 ]; then
                        echo "\$(date): File integrity violations detected" >> \$LOG_FILE
                        cat /tmp/aide-check.log >> \$LOG_FILE
                        mail -s "File Integrity Alert" \$ALERT_EMAIL < /tmp/aide-check.log
                    fi
                fi
            }
            
            # Monitor system resources for anomalies
            check_resource_anomalies() {
                CPU_USAGE=\$(top -bn1 | grep "Cpu(s)" | awk '{print \$2}' | cut -d'%' -f1)
                MEMORY_USAGE=\$(free | grep Mem | awk '{printf "%.2f", \$3/\$2 * 100.0}')
                
                if (( \$(echo "\$CPU_USAGE > 90" | bc -l) )); then
                    echo "\$(date): High CPU usage: \$CPU_USAGE%" >> \$LOG_FILE
                fi
                
                if (( \$(echo "\$MEMORY_USAGE > 95" | bc -l) )); then
                    echo "\$(date): High memory usage: \$MEMORY_USAGE%" >> \$LOG_FILE
                fi
            }
            
            # Run all checks
            check_failed_logins
            check_suspicious_connections
            check_file_integrity
            check_resource_anomalies
            \`\`\`

            ### Compliance Automation:

            #### PCI DSS Compliance Script:
            \`\`\`bash
            #!/bin/bash
            # pci-compliance-check.sh
            
            echo "PCI DSS Compliance Check - \$(date)"
            echo "=================================="
            
            # Requirement 2: Don't use vendor-supplied defaults
            echo "Checking default passwords and accounts..."
            
            # Check for default accounts
            if getent passwd mysql >/dev/null 2>&1; then
                echo "WARNING: Default mysql account exists"
            fi
            
            # Check SSH configuration
            if grep -q "PermitRootLogin yes" /etc/ssh/sshd_config; then
                echo "FAIL: Root SSH login is enabled"
            else
                echo "PASS: Root SSH login is disabled"
            fi
            
            # Requirement 8: Assign unique IDs
            echo "Checking password policies..."
            
            # Check password complexity
            if grep -q "minlen=8" /etc/security/pwquality.conf; then
                echo "PASS: Minimum password length is 8"
            else
                echo "FAIL: Password length requirement not met"
            fi
            
            # Requirement 10: Track and monitor all access
            echo "Checking logging configuration..."
            
            if systemctl is-active rsyslog >/dev/null 2>&1; then
                echo "PASS: Logging service is active"
            else
                echo "FAIL: Logging service is not active"
            fi
            
            # Check log rotation
            if [ -f /etc/logrotate.d/rsyslog ]; then
                echo "PASS: Log rotation is configured"
            else
                echo "FAIL: Log rotation not configured"
            fi
            
            echo "Compliance check complete"
            \`\`\`

            ## Advanced Authentication and Authorization:
            - **Multi-factor Authentication**: PAM modules for 2FA
            - **Certificate-based Authentication**: PKI implementation
            - **Role-based Access Control**: SELinux/AppArmor policies
            - **Centralized Authentication**: LDAP/Active Directory integration
            - **Privileged Access Management**: sudo policies and session recording
          `,
          commands: [
            "aide --init",
            "lynis audit system",
            "chkrootkit",
            "rkhunter --check",
            "openvas-start",
            "nmap -sS -O target_ip",
            "fail2ban-client status sshd"
          ],
          practice: "Implement a complete security hardening strategy for a web server including intrusion detection, compliance monitoring, and incident response procedures."
        },
        {
          id: 2,
          title: "Container Security",
          content: `
            Secure containerized applications and container orchestration platforms.

            ## Real-World Scenario: Secure Multi-tenant SaaS Platform
            
            Implement security for a multi-tenant SaaS platform running on Kubernetes with strict isolation requirements.

            ### Container Image Security:

            #### Secure Dockerfile Best Practices:
            \`\`\`dockerfile
            # Use specific, minimal base image
            FROM node:18.17.0-alpine3.18
            
            # Create non-root user early
            RUN addgroup -g 1001 -S nodejs && \\
                adduser -S nextjs -u 1001 -G nodejs
            
            # Set working directory
            WORKDIR /app
            
            # Install security updates
            RUN apk update && \\
                apk upgrade && \\
                apk add --no-cache dumb-init && \\
                rm -rf /var/cache/apk/*
            
            # Copy package files with correct ownership
            COPY --chown=nextjs:nodejs package*.json ./
            
            # Install dependencies with security audit
            RUN npm ci --only=production --audit && \\
                npm cache clean --force
            
            # Copy application code
            COPY --chown=nextjs:nodejs . .
            
            # Remove unnecessary packages and files
            RUN rm -rf /app/tests /app/docs /app/.git && \\
                apk del --purge && \\
                rm -rf /var/cache/apk/* /tmp/*
            
            # Set security context
            USER nextjs
            
            # Use dumb-init for proper signal handling
            ENTRYPOINT ["dumb-init", "--"]
            
            # Health check
            HEALTHCHECK --interval=30s --timeout=3s --start-period=60s \\
              CMD curl -f http://localhost:3000/health || exit 1
            
            CMD ["npm", "start"]
            \`\`\`

            #### Image Scanning Pipeline:
            \`\`\`bash
            #!/bin/bash
            # secure-build-pipeline.sh
            
            IMAGE_NAME="\$1"
            IMAGE_TAG="\$2"
            FULL_IMAGE="\$IMAGE_NAME:\$IMAGE_TAG"
            
            echo "Building secure container image: \$FULL_IMAGE"
            
            # Build image
            docker build -t \$FULL_IMAGE .
            
            # Scan for vulnerabilities with Trivy
            echo "Scanning for vulnerabilities..."
            trivy image --exit-code 1 --severity HIGH,CRITICAL \$FULL_IMAGE
            if [ \$? -ne 0 ]; then
                echo "High or critical vulnerabilities found. Build failed."
                exit 1
            fi
            
            # Scan for secrets with truffleHog
            echo "Scanning for secrets..."
            docker run --rm -v "\$(pwd):/pwd" \\
                trufflesecurity/trufflehog:latest filesystem /pwd
            
            # Check for best practices with Dockle
            echo "Checking Dockerfile best practices..."
            dockle --exit-code 1 \$FULL_IMAGE
            
            # Static analysis with Clair
            echo "Running Clair security scan..."
            clair-scanner --ip \$(hostname -I | awk '{print \$1}') \$FULL_IMAGE
            
            # Sign image with Cosign (if keys are available)
            if [ -f "\$HOME/.cosign/cosign.key" ]; then
                echo "Signing image with Cosign..."
                cosign sign --key \$HOME/.cosign/cosign.key \$FULL_IMAGE
            fi
            
            echo "Security checks passed. Image ready for deployment."
            \`\`\`

            ### Kubernetes Security Policies:

            #### Pod Security Standards:
            \`\`\`yaml
            # pod-security-policy.yaml
            apiVersion: policy/v1beta1
            kind: PodSecurityPolicy
            metadata:
              name: restricted-psp
            spec:
              privileged: false
              allowPrivilegeEscalation: false
              requiredDropCapabilities:
                - ALL
              volumes:
                - 'configMap'
                - 'emptyDir'
                - 'projected'
                - 'secret'
                - 'downwardAPI'
                - 'persistentVolumeClaim'
              runAsUser:
                rule: 'MustRunAsNonRoot'
              runAsGroup:
                rule: 'MustRunAs'
                ranges:
                  - min: 1
                    max: 65535
              seLinux:
                rule: 'RunAsAny'
              fsGroup:
                rule: 'RunAsAny'
              readOnlyRootFilesystem: true
              hostNetwork: false
              hostIPC: false
              hostPID: false
            \`\`\`

            #### Network Policies for Micro-segmentation:
            \`\`\`yaml
            # network-policy.yaml
            apiVersion: networking.k8s.io/v1
            kind: NetworkPolicy
            metadata:
              name: saas-app-netpol
              namespace: tenant-isolation
            spec:
              podSelector:
                matchLabels:
                  app: saas-app
              policyTypes:
              - Ingress
              - Egress
              ingress:
              # Allow ingress from ingress controller only
              - from:
                - namespaceSelector:
                    matchLabels:
                      name: ingress-nginx
                ports:
                - protocol: TCP
                  port: 8080
              # Allow ingress from same tenant namespace
              - from:
                - namespaceSelector:
                    matchLabels:
                      tenant-id: "\${TENANT_ID}"
                ports:
                - protocol: TCP
                  port: 8080
              egress:
              # Allow egress to DNS
              - to: []
                ports:
                - protocol: UDP
                  port: 53
              # Allow egress to database in same tenant
              - to:
                - namespaceSelector:
                    matchLabels:
                      tenant-id: "\${TENANT_ID}"
                  podSelector:
                    matchLabels:
                      app: postgres
                ports:
                - protocol: TCP
                  port: 5432
              # Allow egress to external APIs (specific IPs only)
              - to:
                - ipBlock:
                    cidr: 10.0.0.0/8
                    except:
                    - 10.0.1.0/24
                ports:
                - protocol: TCP
                  port: 443
            \`\`\`

            #### Runtime Security with Falco:
            \`\`\`yaml
            # falco-rules.yaml
            - rule: Detect crypto mining
              desc: Detect process spawned with crypto mining command line
              condition: >
                spawned_process and
                (proc.cmdline contains "xmrig" or
                 proc.cmdline contains "cryptonight" or
                 proc.cmdline contains "stratum+tcp")
              output: >
                Crypto mining process detected (user=\%user.name command=\%proc.cmdline 
                container=\%container.info image=\%container.image.repository)
              priority: CRITICAL
              tags: [process, mitre_execution]
            
            - rule: Detect shell access to container
              desc: Detect shell spawned inside container
              condition: >
                spawned_process and container and
                (proc.name in (shell_binaries) or
                 proc.name in (bash, sh, zsh))
              output: >
                Shell spawned in container (user=\%user.name container=\%container.info 
                shell=\%proc.name parent=\%proc.pname cmdline=\%proc.cmdline)
              priority: WARNING
              tags: [shell, container]
            
            - rule: Sensitive file access
              desc: Detect access to sensitive files
              condition: >
                open_read and
                (fd.filename startswith /etc/shadow or
                 fd.filename startswith /etc/passwd or
                 fd.filename startswith /etc/ssh/)
              output: >
                Sensitive file accessed (user=\%user.name command=\%proc.cmdline 
                file=\%fd.name container=\%container.info)
              priority: HIGH
              tags: [filesystem, secrets]
            \`\`\`

            ### Secret Management:

            #### External Secrets Operator Configuration:
            \`\`\`yaml
            # external-secret.yaml
            apiVersion: external-secrets.io/v1beta1
            kind: ExternalSecret
            metadata:
              name: app-secrets
              namespace: production
            spec:
              refreshInterval: 15s
              secretStoreRef:
                name: vault-secret-store
                kind: SecretStore
              target:
                name: app-secrets
                creationPolicy: Owner
                template:
                  type: Opaque
                  data:
                    database-url: "postgresql://\%{username}:\%{password}@\%{host}:\%{port}/\%{database}"
              data:
              - secretKey: username
                remoteRef:
                  key: database/production
                  property: username
              - secretKey: password
                remoteRef:
                  key: database/production
                  property: password
              - secretKey: host
                remoteRef:
                  key: database/production
                  property: host
            \`\`\`

            ### Security Scanning and Compliance:

            #### Automated Security Scanning:
            \`\`\`bash
            #!/bin/bash
            # k8s-security-audit.sh
            
            echo "Kubernetes Security Audit - \$(date)"
            echo "===================================="
            
            # Check for privileged containers
            echo "Checking for privileged containers..."
            kubectl get pods --all-namespaces -o jsonpath='{range .items[*]}{.metadata.namespace}{"\t"}{.metadata.name}{"\t"}{.spec.containers[*].securityContext.privileged}{"\n"}{end}' | grep true
            
            # Check for containers running as root
            echo "Checking for containers running as root..."
            kubectl get pods --all-namespaces -o jsonpath='{range .items[*]}{.metadata.namespace}{"\t"}{.metadata.name}{"\t"}{.spec.containers[*].securityContext.runAsUser}{"\n"}{end}' | grep -E "(^[^\s]*\s+[^\s]*\s*\$|0)"
            
            # Check for missing resource limits
            echo "Checking for missing resource limits..."
            kubectl get pods --all-namespaces -o json | jq -r '.items[] | select(.spec.containers[]?.resources.limits == null) | "\(.metadata.namespace)\t\(.metadata.name)"'
            
            # Check for images without version tags
            echo "Checking for images using latest tag..."
            kubectl get pods --all-namespaces -o jsonpath='{range .items[*]}{.metadata.namespace}{"\t"}{.metadata.name}{"\t"}{.spec.containers[*].image}{"\n"}{end}' | grep ":latest"
            
            # Run kube-bench for CIS compliance
            echo "Running CIS Kubernetes Benchmark..."
            kube-bench run --targets node,policies,managedservices
            
            # Run kube-hunter for penetration testing
            echo "Running Kubernetes penetration test..."
            kube-hunter --remote \$K8S_API_SERVER
            
            echo "Security audit complete"
            \`\`\`

            ## Container Security Best Practices:
            - **Least Privilege**: Run as non-root, drop capabilities
            - **Image Scanning**: Automated vulnerability detection
            - **Runtime Protection**: Monitor container behavior
            - **Network Segmentation**: Implement network policies
            - **Secret Management**: Never embed secrets in images
          `,
          commands: [
            "trivy image nginx:latest",
            "docker run --security-opt no-new-privileges",
            "kubectl get psp",
            "falco --list",
            "cosign verify nginx:latest",
            "kube-bench run",
            "kubectl auth can-i create pods --as=system:serviceaccount:default:default"
          ],
          practice: "Implement a complete container security strategy including image scanning, runtime protection, and Kubernetes security policies for a multi-tenant application."
        }
      ]
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>🐧 Linux E-Learning Platform</h1>
        <p>Master Linux from beginner to advanced</p>
      </header>

      <main className="main-content">
        {!selectedCourse ? (
          <div className="courses-grid">
            <h2>Available Courses</h2>
            <div className="courses-container">
              {linuxCourses.map(course => (
                <div key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p className="lesson-count">{course.lessons.length} lessons</p>
                  <button 
                    className="start-course-btn"
                    onClick={() => setSelectedCourse(course)}
                  >
                    Start Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : !selectedLesson ? (
          <div className="course-detail">
            <button 
              className="back-btn"
              onClick={() => setSelectedCourse(null)}
            >
              ← Back to Courses
            </button>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            
            <div className="lessons-list">
              <h3>Course Lessons:</h3>
              <ul>
                {selectedCourse.lessons.map((lesson, index) => (
                  <li key={lesson.id} className="lesson-item">
                    <span className="lesson-number">{index + 1}</span>
                    <span 
                      className="lesson-title"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      {lesson.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="course-actions">
              <button 
                className="primary-btn"
                onClick={() => setSelectedLesson(selectedCourse.lessons[0])}
              >
                Start Learning
              </button>
              <button className="secondary-btn">Download Materials</button>
            </div>
          </div>
        ) : (
          <div className="lesson-content">
            <div className="lesson-navigation">
              <button 
                className="back-btn"
                onClick={() => setSelectedLesson(null)}
              >
                ← Back to Course
              </button>
              <button 
                className="back-btn"
                onClick={() => {
                  setSelectedLesson(null);
                  setSelectedCourse(null);
                }}
              >
                ← All Courses
              </button>
            </div>
            
            <div className="lesson-header">
              <h1>{selectedLesson.title}</h1>
              <p className="course-context">
                Course: {selectedCourse.title}
              </p>
            </div>

            <div className="lesson-body">
              <div className="lesson-text">
                <div 
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: selectedLesson.content.replace(/\n/g, '<br>').replace(/##/g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>

              {selectedLesson.commands && (
                <div className="commands-section">
                  <h3>🔧 Commands to Try:</h3>
                  <div className="commands-list">
                    {selectedLesson.commands.map((command, index) => (
                      <div key={index} className="command-item">
                        <code>{command}</code>
                        <button 
                          className="copy-btn"
                          onClick={() => navigator.clipboard.writeText(command)}
                        >
                          Copy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedLesson.practice && (
                <div className="practice-section">
                  <h3>💡 Practice Exercise:</h3>
                  <p className="practice-text">{selectedLesson.practice}</p>
                </div>
              )}

              <div className="lesson-navigation-bottom">
                <div className="lesson-progress">
                  Lesson {selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id) + 1} of {selectedCourse.lessons.length}
                </div>
                <div className="nav-buttons">
                  {selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id) > 0 && (
                    <button 
                      className="nav-btn prev-btn"
                      onClick={() => {
                        const currentIndex = selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id);
                        setSelectedLesson(selectedCourse.lessons[currentIndex - 1]);
                      }}
                    >
                      ← Previous Lesson
                    </button>
                  )}
                  {selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id) < selectedCourse.lessons.length - 1 && (
                    <button 
                      className="nav-btn next-btn"
                      onClick={() => {
                        const currentIndex = selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id);
                        setSelectedLesson(selectedCourse.lessons[currentIndex + 1]);
                      }}
                    >
                      Next Lesson →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
