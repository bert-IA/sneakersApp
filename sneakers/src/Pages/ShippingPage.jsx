import '../styles/ShippingPage.css';
import { useState } from 'react';

// Composant réutilisable pour l'affichage des erreurs
const ErrorMessage = ({ error }) => (
    error ? <span className="error-text">{error}</span> : null
);

function ShippingForm({ onShippingComplete }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        deliveryOptions: 'standard',
        specialInstructions: '',
        deliveryTime: '',
        additionalServices: {
            assembly: false,
            giftWrap: false,
            insurance : false
        },
        newsletter: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    // Handler universel pour les champs simples et imbriqués d'un niveau
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Si le name contient un point, on gère une propriété imbriquée (ex: additionalServices.assembly)
        if (name.includes('.')) {
            const [parent, child] = name.split('.'); // Sépare le parent et l'enfant
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === 'checkbox' ? checked : value // Met à jour la propriété enfant
                }
            }));
        } else {
            // Sinon, on gère une propriété simple
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
        // Réinitialise l'erreur du champ si elle existe
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (data) => {
        const errors = {};
        
        if (!data.firstName.trim()) errors.firstName = 'Prénom requis';
        if (!data.lastName.trim()) errors.lastName = 'Nom requis';
        if (!data.email.trim()) errors.email = 'Email requis';
        if (!data.address.trim()) errors.address = 'Adresse requise';
        if (!data.city.trim()) errors.city = 'Ville requise';
        if (!data.postalCode.trim()) errors.postalCode = 'Code postal requis';
        if (!data.deliveryTime) errors.deliveryTime = 'Créneau requis';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email && !emailRegex.test(data.email)) {
            errors.email = 'Format email invalide';
        }
        
        const postalRegex = /^[0-9]{5}$/;
        if (data.postalCode && !postalRegex.test(data.postalCode)) {
            errors.postalCode = 'Code postal invalide';
        }
        
        
        if (data.phone && data.phone.trim()) {
        const phoneRegex = /^[0-9\s\-+()]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            errors.phone = 'Téléphone invalide (minimum 10 chiffres)';
            }
            if (data.specialInstructions && data.specialInstructions.length > 200) {
                errors.specialInstructions = 'Instructions trop longues (max 200 caractères)';
        }
    }

    return errors;
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        setErrors({});
        
        try {
            const validationErrors = validateForm(formData);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setSuccess(true);
            onShippingComplete?.(formData);
            
        } catch (error) {
            setErrors({ general: "Erreur lors de l'envoi" });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="success-message">
                <h2>Commande confirmée !</h2>
                <p>Vos informations de livraison ont été enregistrées.</p>
            </div>
        );
    }

    return (
        <div className="shipping-form">
            <h2>Informations de livraison</h2>
            
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Informations personnelles</legend>
                    
                    <div className="form-group">
                        <label htmlFor="firstName">Prénom *</label>
                        <input 
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.firstName} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="lastName">Nom *</label>
                        <input 
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.lastName} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.email} />
                    </div>

                        <div className="form-group">
                        <label htmlFor="phone">Téléphone</label>
                        <input 
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='0634128950'
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.phone} />
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Adresse de livraison</legend>
                    
                    <div className="form-group">
                        <label htmlFor="address">Adresse *</label>
                        <input 
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.address} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="city">Ville *</label>
                        <input 
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.city} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="postalCode">Code postal *</label>
                        <input 
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            value={formData.postalCode}
                            onChange={handleChange}
                            maxLength={5}
                            disabled={isSubmitting}
                        />
                        <ErrorMessage error={errors.postalCode} />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Options de livraison</legend>
                    
                    <div className="radio-group">
                        <label>
                            <input 
                                name="deliveryOptions"
                                type="radio"
                                value="standard"
                                checked={formData.deliveryOptions === 'standard'}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            Livraison standard (3-5 jours) - Gratuit
                        </label>
                        
                        <label>
                            <input 
                                name="deliveryOptions"
                                type="radio"
                                value="express"
                                checked={formData.deliveryOptions === 'express'}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            Livraison express (24h) - 9,99€
                        </label>
                    </div>

                    {formData.deliveryOptions==="express" && (
                        <div className="form-group">
                            <label htmlFor="specialInstructions">Instructions spéciales</label>
                            <textarea
                                id="specialInstructions"
                                name="specialInstructions"
                                value={formData.specialInstructions}
                                onChange={handleChange}
                                placeholder="code d'accès, étage, précisions..."
                                maxLength={200}
                                rows={4}
                                disabled={isSubmitting}
                            />
                        <small className="char-count">
                        {formData.specialInstructions.length}/200 caractères
                        </small>

                        <ErrorMessage error={errors.specialInstructions} />
                        </div>
                    )}
                    <div className="form-group">
                    <label htmlFor="deliveryTime">Créneau de livraison</label>
                    <select
                        id="deliveryTime"
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        
                    >
                        <option value="">Choisir un créneau</option>
                        <option value="morning">Matin(8h-12h)</option>
                        <option value="midday">Midi(10h-14h)</option>
                        <option value="afternoon">Après-midi(14h-18h)</option>
                    </select>
                    <ErrorMessage error={errors.deliveryTime} />
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Services additionnels</legend>
                    <div className="form-group">
                        <label htmlFor="assembly"></label>
                            <input 
                                id="assembly"
                                name="additionalServices.assembly"
                                type="checkbox"
                                checked={formData.additionalServices.assembly}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            Montage à domicile (+105,00€)
                        
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="giftWrap"></label>
                            <input 
                                id="giftWrap"
                                name="additionalServices.giftWrap"
                                type="checkbox"
                                checked={formData.additionalServices.giftWrap}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            Emballage cadeau (+5,00€)
                        
                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="insurance"></label>
                            <input 
                                id="insurance"
                                name="additionalServices.insurance"
                                type="checkbox"
                                checked={formData.additionalServices.insurance}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            Assurance livraison (+15,00€)
                        
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Préférences</legend>

                    <div className="form-group">
                        <label htmlFor="newsletter"></label>
                            <input 
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                                checked={formData.newsletter}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        S'abonner à notre newsletter
                    
                    </div>
                </fieldset>

                {errors.general && (
                    <div className="error-banner">
                        <ErrorMessage error={errors.general} />
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Traitement...' : 'Confirmer la commande'}
                </button>
            </form>
        </div>
    );
}

export default ShippingForm;
