// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {

  const button = document.getElementById('fetchInfo');
  const content = document.getElementById('dynamicContent');

  if (!button || !content) {
    console.error('找不到必要的HTML元素！');
    return;
  }

  button.addEventListener('click', async function() {
    // 按钮状态管理
    button.disabled = true;
    button.textContent = '加载中...';
    content.innerHTML = '正在请求动态内容...';

    try {
      // 尝试调用无服务器函数
      const response = await fetch('/api/getInfo');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 显示动态内容
      content.innerHTML = `
        <strong>✅ 动态内容获取成功！</strong><br>
        ${data.message}<br>
        <small>时间戳: ${data.timestamp}</small>
      `;

    } catch (error) {
      // 本地测试时的提示
      content.innerHTML = `
        <strong>⚠️ 本地测试模式</strong><br>
        当前在本地环境，无法调用动态API。<br>
        <em>请部署到 Vercel 后再测试此功能。</em><br>
        <br>
        <strong>错误信息：</strong> ${error.message}
      `;
    } finally {
      // 恢复按钮状态
      button.disabled = false;
      button.textContent = '获取动态信息';
    }
  });
});
