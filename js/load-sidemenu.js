function loadSubmenu() {
        return fetch('submenu.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.querySelector('.inner_menu').innerHTML = html;
            })
            .catch(error => {
                console.error('載入 submenu.html 時發生錯誤:', error);
                document.querySelector('.inner_menu').innerHTML = '無法載入內容';
            });
    }

    // 載入 sticky-sidebar.min.js 的函數
    function loadStickySidebarScript() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'vendor/sticky_sidebar/sticky-sidebar.min.js'; // 替換為您的實際檔案路徑
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 初始化 Sidebar 的函數
    function initializeSidebar() {
        $(function () {
            var sidebar = new StickySidebar('.left_sidebar', {
                topSpacing: 100,
                bottomSpacing: 80,
                containerSelector: '.inner_page .container',
                innerWrapperSelector: '.inner_menu'
            });
            var context_index = new StickySidebar('.content_index', {
                topSpacing: 80,
                bottomSpacing: 200,
                containerSelector: '.inner_container',
                innerWrapperSelector: '.content_index ul'
            });
        });
    }

    // 順序執行：載入 submenu.html -> 載入 sticky-sidebar.min.js -> 初始化 Sidebar
    document.addEventListener("DOMContentLoaded", () => {
        loadSubmenu()
            .then(loadStickySidebarScript)
            .then(initializeSidebar)
            .catch(error => console.error('執行過程中發生錯誤:', error));
    });