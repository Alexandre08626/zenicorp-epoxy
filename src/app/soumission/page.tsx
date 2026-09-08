'use client';

import { useState } from 'react';
import { CheckCircle2, Camera, Send, Check } from 'lucide-react';

const steps = [
  'Type de projet',
  'Type de propriété',
  'Adresse',
  'Dimensions',
  'Description',
  'Photos',
  'Échéancier',
  'Coordonnées',
  'Résumé',
  'Envoi',
];

type FormState = {
  projet: string;
  propriete: string;
  adresse: string;
  ville: string;
  province: string;
  codePostal: string;
  longueur: string;
  largeur: string;
  description: string;
  echeancier: string;
  prenomNom: string;
  telephone: string;
  courriel: string;
};

export default function SoumissionPage() {
  const initialForm: FormState = {
    projet: '', propriete: '', adresse: '', ville: '', province: '', codePostal: '',
    longueur: '', largeur: '', description: '', echeancier: '', prenomNom: '', telephone: '', courriel: '',
  };
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const surface = form.longueur && form.largeur
    ? (parseFloat(form.longueur || '0') * parseFloat(form.largeur || '0')).toFixed(0)
    : '';

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const field = (k: keyof FormState) => form[k];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.prenomNom && !form.telephone && !form.courriel) {
      setError('Veuillez remplir au moins vos coordonnées (nom, téléphone ou courriel).');
      return;
    }
    setSending(true);
    setError('');
    const payload = {
      name: form.prenomNom,
      phone: form.telephone,
      email: form.courriel,
      projet: form.projet,
      source: 'zenicorp-epoxy-soumission',
      description: [form.propriete && `Propriété: ${form.propriete}`,
        form.adresse && `Adresse: ${form.adresse}`,
        form.ville && `Ville: ${form.ville}`,
        form.province && `Province: ${form.province}`,
        form.codePostal && `Code postal: ${form.codePostal}`,
        surface && `Surface: ${surface} pieds²`,
        form.description && `Description: ${form.description}`,
        form.echeancier && `Échéancier: ${form.echeancier}`,
      ].filter(Boolean).join(' · '),
    };
    try {
      const res = await fetch('https://zenitech.dev/api/leads/epoxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.error || 'Erreur lors de l\'envoi. Contactez-nous au 581-748-7017.');
      }
    } catch (err) {
      setError('Problème de connexion. Contactez-nous au 581-748-7017.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="container-zenicorp py-24 max-w-xl text-center">
        <div className="w-16 h-16 rounded-full bg-zenicorp-gold/10 text-zenicorp-gold flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8" />
        </div>
        <h1 className="heading-1 mb-4">Demande bien reçue !</h1>
        <p className="body-base">
          Merci <strong>{form.prenomNom || 'pour votre soumission'}</strong>. Notre équipe Époxy vous
          répondra sous 24h ouvrées.
        </p>
        <p className="text-sm text-zenicorp-mediumGray mt-6">Une question urgente ? Appelez le <a href="tel:5817487017" className="text-zenicorp-gold font-semibold">581-748-7017</a></p>
      </div>
    );
  }

  return (
    <div className="container-zenicorp py-12 max-w-2xl">
      <div className="text-center mb-10">
        <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Division Époxy</p>
        <h1 className="heading-1">Soumission gratuite</h1>
        <p className="body-base mt-3">10 étapes · 2 minutes · Réponse sous 24h</p>
      </div>

      <div className="flex items-center justify-between mb-10 overflow-x-auto">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              i === 0 ? 'bg-zenicorp-gold text-white' : 'bg-zenicorp-lightGray text-zenicorp-mediumGray'
            }`}>{i + 1}</div>
            {i < steps.length - 1 && <div className="w-4 h-0.5 bg-zenicorp-border mx-1" />}
          </div>
        ))}
      </div>

      <form className="card p-8" onSubmit={onSubmit}>
        {/* ÉTAPE 1 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">1.</span> Type de projet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Garage résidentiel', 'Commercial', 'Industriel'].map((o) => (
              <label key={o} className={`border-2 p-4 cursor-pointer flex items-center gap-2 transition-colors ${field('projet') === o ? 'border-zenicorp-gold bg-zenicorp-gold/5' : 'border-zenicorp-border hover:border-zenicorp-gold'}`}>
                <input type="radio" name="projet" value={o} checked={field('projet') === o} onChange={set('projet')} className="accent-zenicorp-gold" />
                <span className="text-sm font-medium">{o}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ÉTAPE 2 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">2.</span> Type de propriété
          </h2>
          <select className="input-field" value={field('propriete')} onChange={set('propriete')}>
            <option value="">Sélectionnez...</option>
            <option>Maison unifamiliale</option>
            <option>Copropriété / Condo</option>
            <option>Immeuble commercial</option>
            <option>Immeuble industriel</option>
          </select>
        </div>

        {/* ÉTAPE 3 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">3.</span> Adresse du projet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input-field" placeholder="Numéro et rue" value={field('adresse')} onChange={set('adresse')} />
            <input className="input-field" placeholder="Ville" value={field('ville')} onChange={set('ville')} />
            <input className="input-field" placeholder="Province" value={field('province')} onChange={set('province')} />
            <input className="input-field" placeholder="Code postal" value={field('codePostal')} onChange={set('codePostal')} />
          </div>
        </div>

        {/* ÉTAPE 4 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">4.</span> Dimensions du plancher
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input-field" type="number" placeholder="Longueur (pi)" value={field('longueur')} onChange={set('longueur')} />
            <input className="input-field" type="number" placeholder="Largeur (pi)" value={field('largeur')} onChange={set('largeur')} />
          </div>
          {surface && <p className="text-sm text-zenicorp-mediumGray mt-2">Surface estimée : <strong>{surface} pieds²</strong></p>}
        </div>

        {/* ÉTAPE 5 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">5.</span> Description du projet
          </h2>
          <textarea className="input-field min-h-32" placeholder="Décrivez votre projet : état du plancher, fissures, taches d'huile, couleur souhaitée, paillettes..." value={field('description')} onChange={set('description')} />
        </div>

        {/* ÉTAPE 6 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">6.</span> Photos du plancher
          </h2>
          <label className="border-2 border-dashed border-zenicorp-border p-8 flex flex-col items-center justify-center cursor-pointer hover:border-zenicorp-gold transition-colors">
            <Camera className="w-10 h-10 text-zenicorp-silver mb-2" />
            <span className="text-sm font-medium">Glissez vos photos ici (1-10)</span>
            <span className="text-xs text-zenicorp-mediumGray mt-1">JPG, PNG - max 10 photos ou 1 vidéo. Vous pourrez les ajouter lors de l&apos;appel de confirmation.</span>
          </label>
        </div>

        {/* ÉTAPE 7 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">7.</span> Échéancier souhaité
          </h2>
          <select className="input-field" value={field('echeancier')} onChange={set('echeancier')}>
            <option value="">Sélectionnez...</option>
            <option>Le plus tôt possible</option>
            <option>Ce mois-ci</option>
            <option>Dans 1-3 mois</option>
            <option>Juste pour une estimation</option>
          </select>
        </div>

        {/* ÉTAPE 8 */}
        <div className="mb-8">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">8.</span> Vos coordonnées
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="input-field" placeholder="Prénom et nom" value={field('prenomNom')} onChange={set('prenomNom')} required={!field('telephone') && !field('courriel')} />
            <input className="input-field" type="tel" placeholder="Téléphone" value={field('telephone')} onChange={set('telephone')} />
            <input className="input-field sm:col-span-2" type="email" placeholder="Courriel" value={field('courriel')} onChange={set('courriel')} />
          </div>
        </div>

        {/* ÉTAPE 9 */}
        <div className="mb-8 bg-zenicorp-lightGray border border-zenicorp-border p-6">
          <h2 className="heading-3 mb-4 flex items-center gap-2">
            <span className="text-zenicorp-gold font-bold">9.</span> Résumé de votre demande
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ['Type de projet', field('projet') || '—'],
              ['Propriété', field('propriete') || '—'],
              ['Ville', field('ville') || '—'],
              ['Surface', surface || '—'],
              ['Échéancier', field('echeancier') || '—'],
              ['Nom', field('prenomNom') || '—'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-zenicorp-border pb-2">
                <span className="text-zenicorp-mediumGray">{k}</span>
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ÉTAPE 10 */}
        {error && <p className="mb-4 text-sm font-semibold text-red-600">{error}</p>}
        <button type="submit" disabled={sending} className="btn-gold w-full !py-4 text-base disabled:opacity-60">
          {sending ? 'Envoi en cours...' : (<><Send className="w-5 h-5 mr-2" /> Envoyer ma demande de soumission</>)}
        </button>
        <p className="text-center text-xs text-zenicorp-mediumGray mt-4 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-zenicorp-gold" /> Réponse garantie sous 24h ouvrées. Aucun engagement.
        </p>
      </form>
    </div>
  );
}