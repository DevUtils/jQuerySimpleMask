<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery Simple Mask</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/styles/atom-one-dark.min.css">
    <script src="https://unpkg.com/@highlightjs/cdn-assets@11.11.1/highlight.min.js"></script>

    <link rel="stylesheet" href="{{ asset('media/css/home.css') }}">
</head>

<body>

    <div class="container">

        <!-- ── Hero ── -->
        <header class="hero">
            <h1 class="hero-title">
                jQuery Simple <span class="word-mask">Mask</span>
            </h1>
            <p class="hero-sub">
                Máscaras de entrada para formatos brasileiros:
                <br>
                CEP, CPF, CNPJ, telefone e mais. Leve e fácil de usar.
            </p>
            <div class="hero-actions">
                <a href="https://github.com/DevUtils/jQuerySimpleMask/archive/master.zip" class="btn-primary">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                        <path
                            d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
                        <path
                            d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.97a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.779a.749.749 0 1 1 1.06-1.06l1.97 1.97Z" />
                    </svg>
                    Download
                </a>
                <a href="https://github.com/DevUtils/jQuerySimpleMask" class="btn-secondary" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path
                            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                    </svg>
                    GitHub
                </a>
            </div>
        </header>

        <!-- ── Live Demo ── -->
        <div class="animate-in delay-1">
            <div class="section-label"><span>Live Demo</span></div>
            <div class="card">
                <div class="form-grid">

                    <div class="field">
                        <label for="frCep">CEP</label>
                        <input type="text" id="frCep" placeholder="00000-000">
                    </div>

                    <div class="field">
                        <label for="frDtel">(DDD) Telefone</label>
                        <input type="text" id="frDtel" placeholder="(00) 00000-0000">
                    </div>

                    <div class="field">
                        <label for="frTel">Telefone</label>
                        <input type="text" id="frTel" placeholder="0000-0000">
                    </div>

                    <div class="field">
                        <label for="frData">Data</label>
                        <input type="text" id="frData" placeholder="DD/MM/AAAA">
                    </div>

                    <div class="field">
                        <label for="frCpf">CPF</label>
                        <input type="text" id="frCpf" placeholder="000.000.000-00">
                    </div>

                    <div class="field">
                        <label for="frCnpj">CNPJ</label>
                        <input type="text" id="frCnpj" placeholder="00.000.000/0000-00">
                    </div>

                    <div class="field">
                        <label for="frCallback">Com Callback</label>
                        <input type="text" id="frCallback" placeholder="00000">
                        <span class="hint">Abra o console para ver o callback</span>
                    </div>

                    <div class="field">
                        <label for="frNone">Sem máscara</label>
                        <input type="text" id="frNone" placeholder="Campo livre">
                    </div>

                </div>
            </div>
        </div>

        <!-- ── Usage ── -->
        <div class="animate-in delay-2">
            <div class="section-label"><span>Uso</span></div>
            <div class="tabs-wrapper">
                <div class="tabs-header">
                    <button class="tab-btn active" onclick="switchTab('helper', this)">Helper Mode</button>
                    <button class="tab-btn" onclick="switchTab('custom', this)">Custom Mode</button>
                </div>

                <!-- Helper Mode -->
                <div id="tab-helper" class="tab-pane active">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-filename">app.js</span>
                    </div>
                    <pre><code class="language-javascript">$(document).ready(function() {
    $('#frCep').simpleMask({ 
        'mask': 'cep', 
        'nextInput': true 
    });
    $('#frDtel').simpleMask({ 
        'mask': 'ddd-tel9', 
        'nextInput': true 
    });
    $('#frTel').simpleMask({ 
        'mask': 'tel9', 
        'nextInput': true 
    });
    $('#frData').simpleMask({ 
        'mask': 'data', 
        'nextInput': true 
    });
    $('#frCpf').simpleMask({ 
        'mask': 'cpf', 
        'nextInput': true 
    });
    $('#frCnpj').simpleMask({ 
        'mask': 'cnpj', 
        'nextInput': true 
    });
});</code></pre>
                </div>

                <!-- Custom Mode -->
                <div id="tab-custom" class="tab-pane">
                    <div class="code-header">
                        <div class="code-dots"><span></span><span></span><span></span></div>
                        <span class="code-filename">app.js</span>
                    </div>
                    <pre><code class="language-javascript">$(document).ready(function() {
    $('#frCep').simpleMask({ 
        'mask': '#####-###', 
        'nextInput': $('#frDtel') 
    });
    $('#frDtel').simpleMask({ 
        'mask': ['(##) ####-####', '(##) #####-####'], 
        'nextInput': $('#frTel') 
    });
    $('#frTel').simpleMask({ 
        'mask': ['####-####', '#####-####'], 
        'nextInput': $('#frData') 
    });
    $('#frData').simpleMask({ 
        'mask': '##/##/####', 
        'nextInput': $('#frCpf') 
    });
    $('#frCpf').simpleMask({ 
        'mask': '###.###.###-##', 
        'nextInput': $('#frCnpj') 
    });
    $('#frCnpj').simpleMask({ 
        'mask': '##.###.###/####-##' 
    });

    $('#frCallback').simpleMask({
        'mask': '#####',
        'nextInput': true,
        'onComplete': function(element) {
            console.log('onComplete', element);
        }
    });
});</code></pre>
                </div>
            </div>
        </div>

        <!-- ── Footer ── -->
        <footer class="footer animate-in delay-3">
            <p>jQuery Simple Mask &mdash; Projeto original no <a
                    href="https://github.com/DevUtils/jQuerySimpleMask" target="_blank">GitHub</a></p>
        </footer>

    </div>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="{{ asset('media/js/jQuery.SimpleMask.min.js') }}"></script>
    <script src="{{ asset('media/js/home.js') }}"></script>

</body>

</html>
