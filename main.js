document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('input-busca');
    const tables = document.querySelectorAll('.lista');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        tables.forEach(table => {
            const rows = table.getElementsByTagName('tr');
            let visibleRowCount = 0;

            for (let i = 0; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                let rowContainsSearchTerm = false;

                for (let j = 0; j < cells.length; j++) {
                    if (cells[j].innerText.toLowerCase().includes(searchTerm)) {
                        rowContainsSearchTerm = true;
                        break;
                    }
                }

                if (rowContainsSearchTerm) {
                    rows[i].style.display = '';
                    visibleRowCount++;
                } else {
                    rows[i].style.display = 'none';
                }
            }

            if (visibleRowCount === 0) {
                table.style.display = 'none';
            } else {
                table.style.display = '';
            }
        });
    });
});