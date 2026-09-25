+++
date = '2026-02-07T13:29:41+03:00'
draft = false
title = 'Полезные команды'
[_build]
  list = "never"
  render = true
+++


#### 🐧 Шпаргалка: 33 основные команды для управления Linux-сервером

- Формат: **команда** — краткое описание + пример

---

## 🖥️ 1. Информация о системе и хосте

### 1. `hostname` — показать имя хоста
```bash
hostname
hostname -I          # показать IP-адреса
hostname -f          # FQDN
```

### 2. `hostnamectl` — замена имени хоста
```bash
hostnamectl set-hostname new-server-name
hostnamectl                            # проверить
```

### 3. `uname` — информация о ядре и системе
```bash
uname -a
uname -r            # версия ядра
```

### 4. `uptime` — время работы и нагрузка
```bash
uptime
```

### 5. `whoami` — текущий пользователь
```bash
whoami
id
```

---

## 💾 2. Диски и файловые системы

### 6. `lsblk` — список блочных устройств
```bash
lsblk
lsblk -f           # с файловыми системами
```

### 7. `df` — свободное место на дисках
```bash
df -h
df -h /var         # по конкретному разделу
```

### 8. `du` — размер каталогов/файлов
```bash
du -sh /var/log/*
du -sh * | sort -h
```

### 9. `fdisk` / `parted` — разметка дисков (расширение пространства)
```bash
fdisk -l
fdisk /dev/sdb
parted /dev/sdb resizepart 1 100%
```

### 10. `growpart` / `resize2fs` / `xfs_growfs` — расширение ФС
```bash
growpart /dev/sda 3
resize2fs /dev/sda3      # ext4
xfs_growfs /             # xfs
```

### 11. `mount` / `umount` — монтирование
```bash
mount /dev/sdb1 /mnt
umount /mnt
mount | column -t
```

---

## 📁 3. Работа с файлами и каталогами

### 12. `ls` — список файлов
```bash
ls -lah
ls -lt              # сортировка по времени
```

### 13. `cd` — переход по каталогам
```bash
cd /etc
cd ~
cd -
```

### 14. `cp` / `mv` / `rm` — копирование, перемещение, удаление
```bash
cp -r /src /dst
mv file /tmp/
rm -rf /tmp/old
```

### 15. `mkdir` / `rmdir` — создание/удаление каталогов
```bash
mkdir -p /opt/app/logs
```

### 16. `find` — поиск файлов
```bash
find /var -name "*.log" -mtime +7
find / -size +100M
```

### 17. `tar` — архивирование
```bash
tar -czvf backup.tar.gz /etc
tar -xzvf backup.tar.gz -C /tmp
```

---

## 📝 4. Просмотр и редактирование

### 18. `cat` / `less` / `tail` / `head`
```bash
cat /etc/hosts
less /var/log/syslog
tail -f /var/log/nginx/access.log
head -n 20 file.txt
```

### 19. `nano` / `vim` — редакторы
```bash
nano /etc/nginx/nginx.conf
vim /etc/fstab
```

### 20. `grep` — поиск по содержимому
```bash
grep -ri "error" /var/log/
grep -v "^#" config.conf
```

### 21. `sed` / `awk` — обработка текста
```bash
sed -i 's/old/new/g' file.txt
awk '{print $1, $3}' file.txt
```

---

## ⚙️ 5. Процессы и службы

### 22. `ps` / `top` / `htop` — мониторинг процессов
```bash
ps aux | grep nginx
top
htop
```

### 23. `kill` / `pkill` / `killall`
```bash
kill -9 1234
pkill -f "python app.py"
```

### 24. `systemctl` — управление службами
```bash
systemctl status nginx
systemctl start|stop|restart nginx
systemctl enable|disable nginx
systemctl list-units --type=service
```

### 25. `journalctl` — логи systemd
```bash
journalctl -u nginx -f
journalctl --since "1 hour ago"
```

---

## 🌐 6. Сеть

### 26. `ip` — сетевые интерфейсы
```bash
ip a
ip r
ip link set eth0 up
```

### 27. `ss` / `netstat` — открытые порты
```bash
ss -tulnp
netstat -tulnp
```

### 28. `ping` / `traceroute` / `curl` / `wget`
```bash
ping -c 4 8.8.8.8
traceroute ya.ru
curl -I https://example.com
wget https://example.com/file.tar.gz
```

### 29. `ssh` / `scp` / `rsync` — удалённый доступ и копирование
```bash
ssh user@server
scp file user@server:/path/
rsync -avz /src/ user@server:/dst/
```

---

## 👤 7. Пользователи и права

### 30. `useradd` / `passwd` / `usermod`
```bash
useradd -m -s /bin/bash devops
passwd devops
usermod -aG sudo devops
```

### 31. `chmod` / `chown`
```bash
chmod 755 script.sh
chown -R www-data:www-data /var/www
```

### 32. `sudo` / `su` — повышение прав
```bash
sudo -i
su - user
```

---

## 📦 8. Пакеты и обновления

### 33. `apt` / `dnf` / `yum` — управление пакетами
```bash
# Debian/Ubuntu
apt update && apt upgrade -y
apt install nginx

# RHEL/CentOS/Fedora
dnf update -y
dnf install nginx
```

---

## 🧰 Бонус: полезные мелочи

| Команда | Назначение |
|---|---|
| `history` | история команд |
| `crontab -e` | планировщик задач |
| `date` / `timedatectl` | время и часовой пояс |
| `reboot` / `shutdown -h now` | перезагрузка / выключение |
| `df -i` | проверка inode |
| `free -h` | оперативная память |
| `lsof -i :80` | кто занял порт |

---

💡 **Совет:** сохрани в `~/.bashrc` алиасы:
```bash
alias ll='ls -lah'
alias ..='cd ..'
alias ports='ss -tulnp'
alias logs='journalctl -xe'
```

📌 Держи под рукой — 90% задач решается этими 33 командами.