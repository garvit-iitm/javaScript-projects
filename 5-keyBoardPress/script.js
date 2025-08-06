    const insert = document.querySelector('.insert');

    document.addEventListener('keydown', (event) => {
      insert.innerHTML = `
        <table class="border-collapse border border-gray-700 text-center text-lg">
          <thead>
            <tr class="bg-gray-800 text-teal-400">
              <th class="px-6 py-2 border border-gray-700">Key</th>
              <th class="px-6 py-2 border border-gray-700">KeyCode</th>
              <th class="px-6 py-2 border border-gray-700">Code</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-700">
              <td class="px-6 py-2 border border-gray-600">${event.key === ' ' ? 'Space' : event.key}</td>
              <td class="px-6 py-2 border border-gray-600">${event.keyCode}</td>
              <td class="px-6 py-2 border border-gray-600">${event.code}</td>
            </tr>
          </tbody>
        </table>
      `;
    });