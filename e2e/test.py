from playwright.sync_api import sync_playwright

def take_screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        with open("console_logs.txt", "w") as f:
            page.on("console", lambda msg: f.write(f"{msg.type}: {msg.text}\\n"))
            page.goto("http://localhost:3000", timeout=60000)
            page.screenshot(path="screenshot.png")

        browser.close()

if __name__ == "__main__":
    take_screenshot()
