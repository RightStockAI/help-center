---
sidebar_position: 2
---

# Troubleshooting Guide

Solutions to common problems on RightStockAI. Find quick fixes for technical issues, performance problems, and account access.

## Quick Fixes (Try These First)

If you're experiencing issues, try these quick fixes first:

1. **Refresh the page** (F5 or Ctrl + R)
2. **Clear browser cache and cookies**
3. **Try a different browser**
4. **Check your internet connection**
5. **Log out and log back in**

Still having issues? Browse the detailed solutions below.

---

## Login & Authentication Issues

### Cannot Log In

**Symptoms:** Login button not working, credentials rejected

**Solutions:**

1. **Verify Credentials**
   - Check email spelling
   - Verify password (CAPS LOCK off)
   - Try password reset

2. **Clear Browser Data**
   ```
   Chrome: Settings > Privacy > Clear browsing data
   Firefox: Options > Privacy > Clear Data
   Safari: Preferences > Privacy > Manage Website Data
   ```

3. **Disable Extensions**
   - Try incognito/private mode
   - Disable ad blockers
   - Disable privacy extensions temporarily

4. **Check Account Status**
   - Verify email address
   - Account may be suspended
   - Check spam folder for verification email

### Session Expired Frequently

**Symptoms:** Getting logged out repeatedly

**Solutions:**

1. **Browser Settings**
   - Enable cookies
   - Allow third-party cookies for rightstockai.com
   - Don't clear cookies on exit

2. **Browser Issues**
   - Update browser to latest version
   - Try different browser
   - Clear cache and cookies

3. **Network Issues**
   - Check stable internet connection
   - Disable VPN temporarily
   - Try different network

### Two-Factor Authentication Issues

**Symptoms:** 2FA code not working

**Solutions:**

1. **Time Synchronization**
   - Ensure device time is correct
   - Enable automatic time sync
   - Check timezone settings

2. **Backup Codes**
   - Use backup codes if available
   - Generate new backup codes after login

3. **Reset 2FA**
   - Contact support with account verification
   - Email: support@rightstockai.com

---

## Analysis Problems

### Analysis Not Generating

**Symptoms:** Stuck on loading, error message, blank results

**Solutions:**

1. **Verify Stock Symbol**
   - Check correct symbol (e.g., "RELIANCE" not "Reliance")
   - Try searching by company name
   - Verify stock is listed on NSE/BSE

2. **Refresh and Retry**
   - Hard refresh (Ctrl + F5)
   - Clear cache
   - Try again after 5 minutes

3. **Check Subscription**
   - Pro features require subscription
   - Verify subscription status
   - Check payment status

4. **Data Availability**
   - Some stocks may have limited data
   - Recently listed stocks may not be fully covered
   - Suspended stocks cannot be analyzed

### Incorrect Analysis Results

**Symptoms:** Numbers don't match expectations

**Solutions:**

1. **Corporate Actions**
   - Check for stock splits
   - Bonus issues
   - Dividend adjustments
   - Rights issues

2. **Data Lag**
   - Wait for end-of-day updates
   - Refresh after market close
   - Check last updated timestamp

3. **Report Issue**
   - Take screenshot
   - Note stock symbol and date
   - Email support@rightstockai.com

### AI Confidence Score Low

**Symptoms:** AI showing low confidence

**Understanding:**
- Low confidence is a feature, not a bug
- Indicates market uncertainty
- Insufficient historical patterns
- Volatile market conditions

**Actions:**
- Check traditional analysis
- Wait for more data
- Consider lower position size
- Seek additional research

---

## Portfolio Issues

### Portfolio Upload Failed

**Symptoms:** Error during file upload

**Solutions:**

1. **File Format**
   ```
   Supported: .csv, .xlsx, .xls
   Max size: 5 MB
   Encoding: UTF-8
   ```

2. **File Structure**
   - Download sample format
   - Match column headers exactly
   - Remove extra columns
   - No merged cells in Excel

3. **Data Validation**
   - Stock symbols must be valid
   - Quantities must be positive numbers
   - Prices must be numeric
   - Dates in DD/MM/YYYY or YYYY-MM-DD format

4. **Step-by-Step**
   ```
   1. Download sample template
   2. Fill with your data
   3. Save as CSV or Excel
   4. Remove special characters
   5. Upload again
   ```

### Portfolio Values Incorrect

**Symptoms:** Wrong portfolio value or returns

**Solutions:**

1. **Verify Purchase Data**
   - Check purchase prices
   - Verify purchase dates
   - Ensure quantities correct
   - Account for corporate actions

2. **Corporate Actions**
   - Update for stock splits (e.g., 1:1 split = 2x quantity, 1/2 price)
   - Bonus shares (add to quantity)
   - Rights issues (additional purchase)

3. **Manual Correction**
   - Edit individual holdings
   - Adjust cost basis
   - Update quantities
   - Recalculate returns

### Cannot Delete Portfolio

**Symptoms:** Delete button not working

**Solutions:**

1. **Check Dependencies**
   - Remove all holdings first
   - Disconnect from watchlist
   - Remove from dashboard widgets

2. **Browser Issues**
   - Hard refresh page
   - Try different browser
   - Clear cache

3. **Contact Support**
   - If issue persists
   - Email: support@rightstockai.com

---

## Chart Problems

### Charts Not Loading

**Symptoms:** Blank chart area, loading forever

**Solutions:**

1. **Browser Compatibility**
   - Update browser to latest version
   - Enable JavaScript
   - Enable WebGL

2. **Clear Cache**
   ```
   Chrome: Ctrl + Shift + Delete
   Firefox: Ctrl + Shift + Delete
   Safari: Cmd + Option + E
   ```

3. **Disable Extensions**
   - Ad blockers may block charts
   - Privacy extensions
   - Script blockers

4. **Internet Connection**
   - Check stable connection
   - Minimum 2 Mbps recommended
   - Try different network

### Chart Data Incomplete

**Symptoms:** Gaps in chart, missing candles

**Reasons:**
- Market holidays (no data)
- Trading halts
- Corporate actions
- Data provider issues

**Solutions:**
- Select different timeframe
- Check market calendar
- Report if persistent issue

### Indicators Not Working

**Symptoms:** Technical indicators not appearing

**Solutions:**

1. **Chart Settings**
   - Check indicator is enabled
   - Verify indicator settings
   - Reset to default values

2. **Data Requirement**
   - Some indicators need minimum data points
   - RSI needs 14+ periods
   - MACD needs 26+ periods

3. **Refresh Chart**
   - Reload chart
   - Switch timeframes
   - Try different stock

---

## Payment & Subscription Issues

### Payment Failed

**Symptoms:** Payment not completing

**Solutions:**

1. **Verify Card Details**
   - Check card number
   - Verify expiry date
   - Correct CVV
   - Billing address matches

2. **Bank Issues**
   - Sufficient balance
   - Card enabled for online transactions
   - International transactions enabled (if applicable)
   - 3D Secure/OTP authentication

3. **Try Different Method**
   - Use UPI instead
   - Try different card
   - Use net banking
   - Digital wallet

4. **Contact Bank**
   - Bank may be blocking transaction
   - Request authorization
   - Check spending limits

### Subscription Not Activating

**Symptoms:** Paid but features not unlocked

**Solutions:**

1. **Wait and Refresh**
   - Allow 5-10 minutes for processing
   - Log out and log back in
   - Clear cache and reload

2. **Verify Payment**
   - Check bank statement
   - Payment confirmation email
   - Transaction ID

3. **Contact Support**
   - Email: billing@rightstockai.com
   - Provide transaction ID
   - Include screenshot

### Cannot Cancel Subscription

**Symptoms:** Cancel button not working

**Solutions:**

1. **Proper Steps**
   ```
   1. Go to My Subscription
   2. Click "Manage Subscription"
   3. Click "Cancel Subscription"
   4. Confirm cancellation
   ```

2. **Browser Issues**
   - Try different browser
   - Disable extensions
   - Clear cache

3. **Contact Support**
   - Email: billing@rightstockai.com
   - We'll process manually

---

## Performance Issues

### Website Loading Slowly

**Symptoms:** Pages take long to load

**Solutions:**

1. **Check Internet**
   - Test speed: fast.com
   - Minimum 2 Mbps recommended
   - Try different network

2. **Browser Optimization**
   - Close unnecessary tabs
   - Clear cache and cookies
   - Disable heavy extensions
   - Update browser

3. **Device Resources**
   - Close other applications
   - Restart browser
   - Restart computer
   - Check RAM usage

4. **Server Status**
   - Check status page (if available)
   - May be temporary high traffic
   - Try during off-peak hours

### Analysis Processing Slow

**Symptoms:** Stock analysis or portfolio calculations taking unusually long time

**Solutions:**

1. **Reduce Analysis Complexity**
   - Select fewer technical indicators
   - Use shorter date ranges
   - Analyze one stock at a time
   - Use basic analysis instead of AI

2. **Optimize Data Handling**
   - Refresh stock prices first
   - Clear old analysis cache
   - Wait for one analysis to complete
   - Check subscription (premium features may be faster)

### Chart Performance

**Symptoms:** Charts lagging when scrolling or zooming

**Solutions:**

1. **Chart Optimization**
   - Use shorter timeframes
   - Reduce number of indicators
   - Use line charts instead of candlesticks
   - Disable animations
   - Use daily data instead of intraday

2. **Graphics Performance**
   - Update graphics drivers
   - Enable GPU acceleration
   - Close other tabs
   - Lower screen resolution if needed

---

## Mobile Issues

### Mobile Site Not Working

**Symptoms:** Features not working on mobile

**Solutions:**

1. **Browser Compatibility**
   - Use Chrome, Firefox, or Safari
   - Update browser to latest version
   - Enable JavaScript

2. **Clear Mobile Cache**
   ```
   Chrome: Settings > Privacy > Clear browsing data
   Safari: Settings > Safari > Clear History
   ```

3. **Request Desktop Site**
   - Sometimes mobile view has issues
   - Use "Request Desktop Site" option
   - Rotate to landscape mode

### Touch Controls Not Responsive

**Symptoms:** Buttons not working on touch

**Solutions:**

1. **Screen Issues**
   - Clean screen
   - Remove screen protector temporarily
   - Disable glove mode

2. **Browser Settings**
   - Enable touch events
   - Disable desktop mode
   - Clear cache

---

## Data & Sync Issues

### Data Not Updating

**Symptoms:** Stale prices, old data

**Solutions:**

1. **Manual Refresh**
   - Pull to refresh (mobile)
   - F5 or Ctrl + R (desktop)
   - Hard refresh: Ctrl + F5

2. **Check Update Time**
   - View "Last Updated" timestamp
   - Market data updates during trading hours
   - End-of-day data after 6 PM IST

3. **Clear Cache**
   - Browser cache may be serving old data
   - Clear site data
   - Reload page

### Watchlist Not Syncing

**Symptoms:** Changes not reflecting across devices

**Solutions:**

1. **Login Status**
   - Ensure logged in same account
   - Check internet connection
   - Wait 30 seconds for sync

2. **Manual Sync**
   - Log out and back in
   - Refresh page on both devices
   - Clear cache if needed

---

## Error Messages

### "Something Went Wrong"

**Generic error message**

**Solutions:**
1. Refresh page
2. Clear cache
3. Try different browser
4. If persists, contact support with details

### "Rate Limit Exceeded"

**Too many requests**

**Solutions:**
1. Wait 5 minutes
2. Reduce frequency of requests
3. Pro users have higher limits
4. Contact support if legitimate use

### "Unauthorized Access"

**Permission issue**

**Solutions:**
1. Log out and back in
2. Check subscription status
3. Feature may require Pro
4. Clear cookies

### "Network Error"

**Connection problem**

**Solutions:**
1. Check internet connection
2. Disable VPN
3. Try different network
4. Check firewall settings

---

## Advanced Troubleshooting

### Browser Console Errors

**For technical users:**

1. **Open Console**
   ```
   Chrome: F12 or Ctrl + Shift + J
   Firefox: F12 or Ctrl + Shift + K
   Safari: Cmd + Option + C
   ```

2. **Check for Errors**
   - Red error messages
   - Copy error text
   - Take screenshot

3. **Report to Support**
   - Include console errors
   - Steps to reproduce
   - Browser version
   - Email: support@rightstockai.com

### Network Tab Analysis

**For debugging data issues:**

1. **Open Network Tab**
   ```
   F12 > Network tab
   ```

2. **Record Requests**
   - Reproduce issue
   - Check failed requests (red)
   - Check request/response

3. **Report Findings**
   - Screenshot network tab
   - Failed request details
   - Email to support

---

## Browser-Specific Solutions

### Chrome
- Enable hardware acceleration: chrome://settings/system
- Clear browsing data: chrome://settings/clearBrowserData
- Update to latest version
- Try incognito mode

### Firefox
- Enable hardware acceleration: Options > General > Performance
- Clear cache: Options > Privacy & Security > Clear Data
- Refresh Firefox if needed
- Check WebRender is enabled

### Safari
- Clear history: Develop > Clear History
- Enable hardware acceleration
- Update to latest version
- Check extensions aren't interfering

### Edge
- Update to latest version
- Clear browsing data
- Check compatibility mode
- Try resetting browser settings

---

## Getting Additional Help

### Before Contacting Support

**Information to gather:**

1. **Account Information**
   - Email address
   - Subscription type
   - Account creation date

2. **Problem Details**
   - What were you trying to do?
   - What happened instead?
   - Error messages
   - Screenshots

3. **Technical Details**
   - Browser and version
   - Operating system
   - Device type
   - Internet connection type

4. **Reproduction Steps**
   - List step-by-step
   - When did it start?
   - Does it happen every time?

### Contact Support

📧 **Email:** support@rightstockai.com

**Include in email:**
- Subject: Brief description
- Account email
- Problem description
- Screenshots/screen recordings
- Browser & OS version
- Steps already tried

💬 **Live Chat:** [Support Page](https://www.rightstockai.com/support)
- Available: 9 AM - 6 PM IST
- Real-time assistance
- Screen sharing available

### Emergency Issues

**For critical problems:**
- Payment issues: billing@rightstockai.com
- Security concerns: security@rightstockai.com
- Account locked: support@rightstockai.com (urgent)

---

## Prevention Tips

### Regular Maintenance

1. **Browser Hygiene**
   - Clear cache weekly
   - Update browser monthly
   - Disable unused extensions

2. **Account Security**
   - Use strong password
   - Enable 2FA
   - Regular password changes

3. **Data Backups**
   - Export portfolio data monthly
   - Save analysis reports
   - Keep transaction records

### Best Practices

1. **Regular Updates**
   - Review portfolio weekly
   - Check watchlist daily
   - Update holdings after trades

2. **System Requirements**
   - Use supported browsers
   - Stable internet (2+ Mbps)
   - Keep system updated

3. **Proactive Monitoring**
   - Check announcements
   - Read update emails
   - Follow best practices

---

## Browser & Device Requirements

### Supported Browsers
- Chrome 102+
- Firefox 102+
- Safari 15.4+
- Edge 102+

### Minimum System Requirements
- **Internet:** 2 Mbps (5 Mbps for advanced features)
- **RAM:** 4GB (8GB recommended)
- **Storage:** 100MB free for browser cache
- **Screen Resolution:** 1024x768 minimum

### Mobile Support
- iOS 12+
- Android 8+
- Chrome Mobile 102+
- Safari Mobile 15+

---

**Still having issues?** Contact us at support@rightstockai.com - we're here to help! 🚀

For more help, check our [FAQ](./faq) or start our [Interactive Product Tour](https://www.rightstockai.com/dashboard).