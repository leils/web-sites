#!/usr/bin/env python3
"""
HTML Page Generator
Generates a styled HTML page based on user input
"""

from datetime import datetime

def get_user_input():
    """Prompt user for page details"""
    print("=== HTML Page Generator ===\n")
    
    title = input("Enter the page title/heading (e.g., 'lsc tools'): ").strip()
    if not title:
        title = "My Page"
    
    filename = input("Enter the filename (e.g., 'index.html'): ").strip()
    if not filename:
        filename = "page.html"
    elif not filename.endswith('.html'):
        filename += '.html'
    
    return title, filename

def generate_html(title):
    """Generate the HTML content"""
    today = datetime.now().strftime("%m.%d.%y")
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        body {{
            padding: 16px;
            display: block;
            height: 100vh;
            margin: 0;
            font-family: monospace;
            user-select: none;
            background-color: bisque;
        }}
        h1 {{
          font-style: italic;
        }}
        ul {{
            width: 100%;
            margin: 24px 0px;
        }}
        li {{
            max-width: 300px;
            margin-bottom: 20px;
            line-height: 1.3em;
        }}
        @media (min-width: 768px) {{
            ul {{
                /* max-height: 60vh; */
                column-count: 2;
                /* Set the number of columns */
                column-gap: 20px;
                /* Adjust the gap between columns */
            }}
        }}
        a {{
            color: cornflowerblue;
        }}
        a:visited {{
            color: cornflowerblue;
        }}
    </style>
</head>
<body>
  <h1>{title}</h1>  
</body>
</html>"""
    
    return html_content

def main():
    """Main function"""
    try:
        # Get user input
        title, filename = get_user_input()
        
        # Generate HTML
        html_content = generate_html(title)
        
        # Write to file
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"\n✓ Successfully created '{filename}'")
        print(f"  Title: {title}")
        
    except KeyboardInterrupt:
        print("\n\nOperation cancelled by user.")
    except Exception as e:
        print(f"\n✗ Error: {e}")

if __name__ == "__main__":
    main()
